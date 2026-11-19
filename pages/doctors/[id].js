import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import BookingSession from '@/components/BookingSession';
import { FullScreenLoader } from '@/components/loader';
async function fetchPsychiatristData() {

  const res = [
    {
      title: "Dr. Vikram Bohra",
      subtitle: "Sr. Consultant Neurology and Chief Interventional Neurologist",
      description:
        "Dr. Bohra has 19 years of experience as a Neurology Specialist Doctor. He specializes in neurology, mental health, mood swings, and behavioral disorders. He is currently working as Senior Consultant Neurology and Chief Interventional Neurologist in Rajasthan Hospital, Jaipur.",
      category: "Consultants",
      image: "vb.png",
      url: "https://www.canadianwanderlust.com",
      experience: 19,
      education: "MBBS, MD, DM",
      languages: "Hindi, English",
      specialties: "Neurology, Mental health, Mood swings, Behavioral disorders",
      price: 600,
    },
    {
      title: "Riddhi Padhya",
      subtitle: "Counseling Psychologist",
      description:
        "Riddhi Padhya is a distinguished Counseling Psychologist with a decade of experience in fostering mental wellness and personal growth. With dual Master's degrees in Counseling Psychology and Human Development, her expertise spans a wide array of psychological disciplines, being a respected School Psychologist and an active member of the Counsellor Council of India. Renowned for her compassionate counseling techniques, she specializes in helping individuals navigate life's challenges, promoting resilience and positive mental health outcomes.",
      category: "Psychologists",
      image: "rp.jpeg",
      url: "https://www.canadianwanderlust.com",
      experience: 10,
      education: "Double Masters in counseling Psychology & Human Development",
      languages: "English, Hindi, Gujarati",
      specialties: "Mental wellness, Personal growth, Resilience, Positive mental health outcomes",
      price: 1500,
    },
    {
      title: "Siddhi Jain",
      subtitle: "Clinical Psychologist and Career Counselor",
      description:
        "Siddhi Jain is an accomplished clinical psychologist, revered for her dedicated approach in the field of mental health. With a Master's degree in Clinical Psychology, she is qualified at addressing complex psychological issues, ranging from anxiety and depression to stress management and cognitive-behavioral therapy for child adolescents. Her approach is not only therapeutic but also empowering, helping individuals navigate their journeys toward mental wellness with confidence and resilience.",
      category: "Psychologists",
      image: "sj.jpeg",
      url: "https://www.canadianwanderlust.com",
      experience: 8,
      education: "M.A and M.Phil in Clinical Psychology",
      languages: "English, Hindi",
      specialties: "Anxiety, Depression, Stress management, Cognitive-behavioral therapy for child adolescents",
      price: 2000,
    },
    {
      title: "Dr. I.D. Gupta",
      subtitle: "Psychiatrist",
      description:
        "Dr. I.D. Gupta offers some advanced treatments for diseases like Alcoholism, Anxiety Disorders, Depression, Suicide, Sleep Disorders, and more. His popularity is ever-increasing, and he is one of the most trusted doctors in Jaipur. The hospitality he provides is frequently appreciated by his patients. It has been his mission to provide patients with the best quality of treatments and ensuring that all patients have information and knowledge about health care treatments and plans.",
      category: "Psychiatrists",
      image: "idg1.png",
      url: "https://www.dr-id-gupta.com",
      experience: 25,
      education: "MD",
      languages: "Hindi, English",
      specialties: "Anxiety disorders, Depression, Suicide, Sleep disorders",
      price: 250,
    },
    {
      title: "Dr. Rahul Saini",
      subtitle: "Consultant neurologist",
      description:
        "Dr. Rahul Saini is a neurologist with 15 years of experience. He obtained his MBBS degree from JLN Medical College Ajmer in 2008, M.D. Medicine in 2014, and DNB Neurology from National Board Examination in 2019. He specializes in VNS, anxiety, time management, ADHD, and cerebral aneurysm.",
      category: "Psychiatrists",
      image: "rs.png",
      experience: 15,
      education: "MBBS, MD, DNB",
      languages: "Hindi, English, Punjabi",
      specialties: "VNS, Anxiety, Time management, ADHD, Cerebral aneurysm",
      price: 500,
    },
    {
      title: "Dr. Raghav Shah",
      subtitle: "Addiction Psychiatrist, Psychiatrist",
      description:
        "Dr Raghav Shah has 4+ years of experience in psychiatry. He specializes in treating addiction, including both substance and behavioral addictions, as well as anxiety, and PTSD.",
      category: "Psychiatrists",
      image: "vt.png",
      url: "https://www.dr-raghav-shah.com",
      experience: 4,
      education: "MBBS, MD, DM (Addiction Psychiatry)",
      languages: "English, Hindi, Marwari",
      specialties: "Addiction, Anxiety, PTSD",
      price: 500,
    },
    {
      title: "Dr. Parul Pareek",
      subtitle: "Clinical Counsellor",
      description:
        "Dr. Parul Pareek was a Director of ROPE, an organisation which strives to foster an ideal living condition for young girls around the nation. A girl-teen expert and clinical psychologist, she fosters ideal living conditions for young girls nationwide.",
      category: "Consultants",
      image: "pp.png",
      url: "https://www.canadianwanderlust.com",
      experience: 8,
      education: "Clinical psychology and motivational speaking",
      languages: "English",
      specialties: "Fostering ideal conditions for young girls, Motivational speaking",
      price: 800,
    },
    {
      title: "Dr. Dharmdeep Singh",
      subtitle: "Consultant Psychiatrist, Assistant Professor at SMS Medical College Jaipur",
      description:
        "Dr. Dharmdeep Singh is a highly recommended psychiatrist in Jaipur with over 6 years of experience. He practices at his Neuropsychiatry & De-addiction Clinic in Boytawala, Jaipur and specializes in adult psychiatry, de-addiction, and behavioral medicine.",
      category: "Consultants",
      image: "idg.png",
      url: "https://www.dr-dharmdeep-singh.com",
      experience: 6,
      education: "MBBS, MD",
      languages: "English, Hindi",
      specialties: "Adult psychiatry, De-addiction, Behavioral medicine",
      price: 800,
    },
    {
      title: "Dr. Anil Tambi",
      subtitle: "Psychiatrist",
      description:
        "Dr. Anil Tambi is a highly esteemed Psychiatrist in Jaipur with 32 years of experience. Renowned for his expertise, he specializes in treating Anxiety disorders, Depression, Bipolar, Schizophrenia, OCD, Suicidal thoughts, and Sleep disorders. Post-retirement, he established the Vivekananda Institute of Mental Health and Neuro Sciences, a 50-bed Psychiatry hospital in Jaipur. As the former President of the Rajasthan Psychiatric Society, he has actively contributed articles in both print and electronic media to raise awareness about Mental health and Psychiatry.",
      category: "Psychiatrists",
      image: "at.png",
      url: "https://www.canadianwanderlust.com",
      experience: 32,
      education: "MBBS, MD",
      languages: "English, Hindi, Marathi",
      specialties: "Anxiety disorders, Depression, Bipolar, Schizophrenia, OCD, Suicidal thoughts, Sleep disorders",
      price: 900,
    },
    {
      title: "Dr. Shariq Qureshi",
      subtitle: "Neuro psychiatrist",
      description:
        "Dr. Shariq Qureshi is a top neuropsychiatrist in Jaipur with 15+ years experience. He combines medication management with holistic approaches such as counseling, therapies, and lifestyle modifications to ensure comprehensive care.",
      category: "Psychiatrists",
      image: "rs1.png",
      url: "https://www.dr-shariq-qureshi.com",
      experience: 15,
      education: "MBBS, DPM",
      languages: "English, Hindi",
      specialties: "OCD, Insomnia, Desensitization, Apnea, Depression,Psychotic disorders, Sleep apnea, Autism spectrum disorder",
      price: 1000,
    },
    {
      title: "Dr. Vikas Thanvi",
      subtitle: "Psychiatrist",
      description:
        "Dr. Vikas Thanvi is a Psychiatrist practicing in Jaipur with 16 years of experience. He specializes in treating depression, stress, anxiety, alcohol addiction, memory loss and sexual problems due to mental distress.",
      category: "Psychiatrists",
      image: "ds.png",
      url: "https://www.dr-vikas-thanvi.com",
      experience: 16,
      education: "MBBS, DPM",
      languages: "English, Hindi, Haryanvi",
      specialties: "Depression, Stress, Anxiety, Alcohol addiction, Memory loss, Sexual problems",
      price: 1200,
    },
    {
      title: "Dr. Aarthi Midha",
      subtitle: "Psychiatrist, Neuropsychiatrist, Addiction Psychiatrist",
      description:
        "Dr. Aarthi Midha is a Psychiatrist by profession and a metabolic & nutritional medicine physician by passion with 20+ years of experience. She specializes in treating depression, capgras syndrome, IBS, neurological dysfunction, anxiety, and bipolar affective disorder.",
      category: "Psychiatrists",
      image: "sq.png",
      url: "https://www.dr-aarthi-midha.com",
      experience: 20,
      education: "MBBS, MD",
      languages: "English, Hindi, Marwari",
      specialties: "Depression, Capgras syndrome, IBS, Neurological dysfunction, Anxiety, Bipolar affective disorder",
      price: 1500,
    },
    {
      title: "Dr. Lekha Panicker",
      subtitle: "Consultant Psychologist",
      description:
        "Dr. Lekha Panicker, a renowned Consultant Psychologist, is actively working towards mental health diagnosis. She offers insights into various aspects of personal and professional development, specializing in youth mental health.",
      category: "Psychologists",
      image: "lp.jpeg",
      url: "https://www.canadianwanderlust.com",
      experience: 24,
      education: "Doctorate in Clinical Psychology",
      languages: "English, Hindi, Tamil, Malayalam",
      specialties: "Child Psychology, Personal and professional development",
      price: 3000,
    },
    {
      title: "Dr. Shiv Gautam",
      subtitle: "Professor psychiatry at Gautam hospital and research center",
      description:
        "Dr. Shiv Gautam is one of the eminent psychiatrists in the country, who is at present the Director and Professor of Psychiatry at the Gautam Institute of Human Behavior and Alternative Medicine, Jaipur. He is known for his extensive experience and expertise in treating a variety of mental health disorders.",
      category: "Psychiatrists",
      image: "sg.png",
      url: "https://www.canadianwanderlust.com",
      experience: 45,
      education: "MBBS, D.P.M, MD",
      languages: "English, Hindi, Gujarati",
      specialties: "ADHD, PTSD, Anxiety, Sleep disorders, Stress management",
      price: 19200,
    },
    {
      title: "Dr. Pooja Anand Sharma",
      subtitle: "Counseling Psychologist and Psychotherapist",
      description: "Dr. Pooja Anand Sharma, a seasoned counseling psychologist and psychotherapist in Delhi with 20 years of experience, is known for her patience, expertise, and comprehensive approach to mental health care. Holding degrees from renowned institutions like the Amity Institute of Behavioral Health and Allied Sciences and Mumbai University, she specializes in treating a wide range of issues, including abnormal behavior, anger management, stress, substance abuse, OCD, grief, and cognitive behavioral challenges. Her services extend to parenting support, psychotherapy, premarital counseling, nicotine de-addiction, and addressing various behavioral issues.",
      category: "Psychologists",
      image: "pas.png",
      url: "https://www.dr-pooja-anand-sharma.com",
      experience: 20,
      education: "Ph.D - Psychology , New World Mission Dunamis International University",
      languages: "English, Hindi, Punjabi",
      specialties: "Anger management, Treatment of Behaviour and thought problems, Cognitive behavioral therapy, OCD, Addiction, Stress management",
      price: 2000
    },
    {
      title: "Ms. Abhilasha Agarwal",
      subtitle: "Clinical Psychologist",
      description: "Dr. Abhilasha Agarwal is dedicated to providing optimal healthcare in a relaxed environment, treating every patient as if they were their own family. Specializing in psychiatric issues such as depression, anxiety, OCD, phobias, panic attacks, as well as environmental and developmental issues, Dr. Agarwal is also an expert in conducting psychological assessments.",
      category: "Psychologists",
      image: "aa1.png",
      url: "https://www.dr-abhilasha-agarwal.com",
      experience: 10,
      education: "Ph.D. , Manipal University Jaipur",
      languages: "English, Hindi",
      specialties: "Anxiety, Depression, Phobia, Panic Attacks, OCD, Smoking Addiction, Fear",
      price: 1000
    },
    {
      title: "Dr. Sarika Boora",
      subtitle: "Clinical Psychologist",
      description: "Dr. Boora is a highly-qualified psychologist in Delhi with a solid work experience and a professional attitude. She practices independently at her clinic and provides psychotherapy and assessment services to adults and teenagers and is known for her relationship counseling services. Thanks to her high success rate of healing, she boasts of high-profile cases and has politicians, celebrities, designers in her client list. You can count on her youth counseling service to help your teenager navigate this confusing phase of their life with more clarity.",
      category: "Psychologists",
      image: "sb.png",
      url: "https://www.dr-sarika-boora.com",
      experience: 12,
      education: "Ph.D - Psychology , New World Mission Dunamis International University",
      languages: "English, Hindi",
      specialties: "Depression, Anxiety, Trauma/PTSD, Interpersonal Concerns, Grief, Eating Disorders, ADHD, Autism, Behavioural Issues, Learning Difficulties, Conflict Management",
      price: 3000
    },
    {
      title: "Dr. R.K. Suri",
      subtitle: "Clinical Psychologist",
      description: "A renowned name in the field of mental health and neuroscience. With almost four decades of experience in clinical psychology, he has dealt with several patients struggling with anxiety, depression, stress, relationship issues, career confusions, trauma, grief of loss, and substance abuse.",
      category: "Psychologists",
      image: "rks.png",
      url: "https://www.dr-rk-suri.com",
      experience: 38,
      education: "PhD (Clinical Psychology) - University Of Delhi",
      languages: "English, Hindi",
      specialties: "Hypnotherapy, Psychoanalysis, Neuropsychological Assessment, Positive Psychology, Career Counseling",
      price: 5000
    },
    {
      title: "Dr. Jyoti Tripathi",
      subtitle: "Clinical Psychologist",
      description: "Dr. Jyoti is a trained Clinical psychologist and hypnotherapist with a doctorate in psychology. She has been associated with this field for the last 22+ years. She has worked independently as well as being part of several hospitals and has dealt with all kinds of cases. With all this, she has also conducted workshop events in schools to make the parents and guardians aware of the psychological conditions of their children. She has a unique way of dealing with cases which vary depending on the patient's age group, his/her social background, family background and other influential factors.",
      category: "Psychologists",
      image: "jt.png",
      url: "https://www.dr-jyoti-tripathi.com",
      experience: 22,
      education: "PhD (Psychology) - University Of Delhi",
      languages: "English, Hindi",
      specialties: "Hypnotherapy, Psychoanalysis, Neuropsychological Assessment, Positive Psychology, Career Counseling",
      price: 2000
    },
    {
      title: "Ms. Tilottama Khandelwal",
      subtitle: "Clinical Psychologist",
      description: "Tilottama Khandelwal, a Licensed Clinical Psychologist registered with the Rehabilitation Council of India, specializes in child mental health. She provides online therapy, addressing a spectrum of child mental health issues such as anxiety, behavioral challenges, family conflicts, and more. Her therapeutic modalities include Art Therapy, Mindfulness, CBT, and DBT, catering to both Indian and international clients.",
      category: "Psychologists",
      image: "tk.png",
      url: "https://www.ms-tilottama-khandelwal.com",
      experience: 5,
      education: "PhD (Psychology) - University Of Delhi",
      languages: "English, Hindi",
      specialties: "Art Therapy, Mindfulness, CBT, DBT",
      price: 2000
    }
  
  ];
  
  const psychiatrists = res
  return psychiatrists;
}

export async function getStaticPaths() {
  const psychiatrists = await fetchPsychiatristData();
  // Generate the paths we want to pre-render based on psychiatrists
  const paths = psychiatrists.map((psychiatrist) => ({
    params: { id: psychiatrist.title.replaceAll(' ', '-').toLowerCase() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const psychiatrists = await fetchPsychiatristData();
  const psychiatrist = psychiatrists.find((p) => p.title.replaceAll(' ', '-').toLowerCase() === params.id);

  // Pass post data to the page via props
  return { props: { psychiatrist } };
}

export default function PsychiatristDetails({ psychiatrist }) {
  const router = useRouter();

  // If the page is still generating, you can show a loading indicator
  if (router.isFallback) {
    return <FullScreenLoader/>;
  }

  return (
    <>
     <Navbar home={true}/>
     <div className={`w-full bg-[#031021] h-screen`}>
      <div className={`container pt-24 mx-auto w-full p-6 flex flex-wrap md:flex-nowrap`}>
        <div className="w-full bg-[#ECF5FF] p-8 rounded-md md:w-1/2">
          <div><Image src={`/${psychiatrist.image}`} alt={psychiatrist.title} width={200} height={200} className="mx-auto rounded-full"/>
          </div>
          <h2 className="text-center text-2xl font-semibold mt-4">{psychiatrist.title}</h2>
          <p className="text-sm py-2 text-center text-black">{psychiatrist.subtitle}</p>
          <div className="mb-6">
            <p className="text-black text-center">{psychiatrist.description}</p>
            
          </div>
        </div>
        <div className="w-full  md:w-1/2 md:ml-6">
        <BookingSession psychiatrist={psychiatrist} />
        </div>
      </div>
      </div>
    </>
  );
}
