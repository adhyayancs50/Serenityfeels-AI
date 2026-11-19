import http from "http";
import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 4111;
const LLAMA_PORT = 9931;
const serverBin = path.join(__dirname, "bin/llama-b12521/llama-server");
const modelPath = path.join(
  __dirname,
  "models/qwen2.5-1.5b-instruct-q4_k_m.gguf"
);
const EXPECTED_MODEL_BYTES = 1117320736;

const SYSTEM = `You are Serenity, a warm friend people talk with about feelings, stress, and everyday life.
Talk like a friend, in short plain sentences. Do not diagnose anyone and do not say they have a clinical illness.
Do not recommend medication or tell someone to start, stop, or change medicine. If they ask about medicine, suggest they speak with a qualified professional.
Do not repeat the same comforting sentence in every reply. Respond to what they just said, and ask one gentle question when it helps.
Use the research notes only when they fit, and explain them simply.
Recommend a professional only if they ask. Then give exactly one of these links and do not recommend again later in the chat:
<u><a href="/doctors/dr.-rahul-saini">Dr. Rahul Saini</a></u>, consultant neurologist in Jaipur.
<u><a href="/doctors/dr.-i.d.-gupta">Dr. I.D. Gupta</a></u>, psychiatrist in Jaipur.
<u><a href="/doctors/riddhi-padhya">Riddhi Padhya</a></u>, counseling psychologist.
<u><a href="/doctors/siddhi-jain">Siddhi Jain</a></u>, clinical psychologist.`;

const CRISIS =
  "I'm really glad you said that. I'm a chat companion, not a crisis service, and I can't keep you safe on my own. If you might act on thoughts of suicide or of hurting someone, contact local emergency services now: 112 in India or 911 in the US. You can also call AASRA at +91-9820466726, or 988 in the US. If you can, tell someone you trust who is nearby.";

let knowledge = [];
try {
  knowledge = JSON.parse(
    fs.readFileSync(path.join(__dirname, "knowledge.json"), "utf8")
  );
} catch (error) {
  console.error("Research notes were not loaded", error.message);
}

let llamaProcess = null;

function relevantNotes(question) {
  const words = (question.toLowerCase().match(/[a-z]{4,}/g) || []).slice(0, 12);
  if (!words.length || !knowledge.length) return "";
  const ranked = knowledge
    .map((chunk) => {
      const text = chunk.text.toLowerCase();
      let score = 0;
      for (const word of words) {
        if (text.includes(word)) score += 1;
      }
      return { score, text: chunk.text };
    })
    .filter((item) => item.score >= 2)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);
  return ranked.map((item) => item.text).join("\n\n");
}

function isCrisis(text) {
  return /\b(suicid|kill myself|want to die|end my life|self-harm|hurt myself|murder)\b/i.test(
    text || ""
  );
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const parts = [];
    req.on("data", (chunk) => parts.push(chunk));
    req.on("end", () => resolve(Buffer.concat(parts).toString("utf8")));
    req.on("error", reject);
  });
}

async function llamaReady() {
  try {
    const response = await fetch(`http://127.0.0.1:${LLAMA_PORT}/health`);
    return response.ok;
  } catch {
    return false;
  }
}

function startLlama() {
  if (llamaProcess || !fs.existsSync(modelPath)) return;
  const stats = fs.statSync(modelPath);
  if (stats.size < EXPECTED_MODEL_BYTES) return;
  const binDir = path.dirname(serverBin);
  llamaProcess = spawn(
    serverBin,
    [
      "-m",
      modelPath,
      "--host",
      "127.0.0.1",
      "--port",
      String(LLAMA_PORT),
      "-c",
      "4096",
      "-ngl",
      "99",
      "-t",
      "4",
    ],
    {
      cwd: binDir,
      env: { ...process.env, DYLD_LIBRARY_PATH: binDir },
      stdio: ["ignore", "pipe", "pipe"],
    }
  );
  llamaProcess.stdout.on("data", (chunk) => process.stdout.write(chunk));
  llamaProcess.stderr.on("data", (chunk) => process.stderr.write(chunk));
  llamaProcess.on("exit", (code) => {
    console.error("llama-server exited", code);
    llamaProcess = null;
  });
}

async function waitForLlama() {
  startLlama();
  for (let attempt = 0; attempt < 120; attempt += 1) {
    if (await llamaReady()) return true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return false;
}

function toMessages(question, memory) {
  const history = Array.isArray(memory) ? memory.slice(-8) : [];
  const messages = [{ role: "system", content: SYSTEM }];
  for (const item of history) {
    const content = String(item?.content || "").trim();
    if (!content) continue;
    const role = item.role === "user" ? "user" : "assistant";
    messages.push({ role, content });
  }
  const notes = relevantNotes(question);
  const userText = notes
    ? `${question}\n\nResearch notes you may use if they fit:\n${notes}`
    : question;
  const last = messages[messages.length - 1];
  if (!(last.role === "user" && last.content === question)) {
    messages.push({ role: "user", content: userText });
  } else if (notes) {
    last.content = userText;
  }
  return messages;
}

async function reply(question, memory) {
  if (isCrisis(question)) return CRISIS;
  const ready = await waitForLlama();
  if (!ready) {
    return "The chatbot is still starting on this computer. Give it a minute, then send your message again.";
  }
  const response = await fetch(
    `http://127.0.0.1:${LLAMA_PORT}/v1/chat/completions`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: toMessages(question, memory),
        temperature: 0.7,
        max_tokens: 320,
      }),
    }
  );
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(detail.slice(0, 300));
  }
  const data = await response.json();
  return (
    data?.choices?.[0]?.message?.content?.trim() ||
    "I heard you. Could you say a little more about how today has felt?"
  );
}

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  if (req.method === "GET" && req.url === "/health") {
    const ready = await llamaReady();
    res.writeHead(ready ? 200 : 503, { "Content-Type": "text/plain" });
    res.end(ready ? "ok" : "starting");
    return;
  }
  if (req.method !== "POST" || !req.url.startsWith("/item")) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
    return;
  }
  try {
    const payload = JSON.parse((await readBody(req)) || "{}");
    const question = String(payload.question || "").trim();
    if (!question) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("Tell me a little about what's on your mind.");
      return;
    }
    const text = await reply(question, payload.memory);
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(text);
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("I couldn't answer that just now. Please try again.");
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Serenity chat listening on http://127.0.0.1:${PORT}`);
  startLlama();
});
