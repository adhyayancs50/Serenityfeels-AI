import "@/styles/globals.css";
import { UserProvider } from "@/context/user";
import AppStateHandler from "@/utils/appStateHandler";
import { DarkModeProvider } from "@/context/DarkModeContext";
import { ChatSelectedProvider } from "@/context/ChatSelectedContext";
import { ChatLoadingProvider } from '@/context/ChatLoadingContext'; // import the provider
import { ShowTypewriterProvider } from '@/context/ShowTypewriterContext'; // Adjust the path as necessary
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <DarkModeProvider>
        <ChatSelectedProvider>
          <AppStateHandler>
          <ChatLoadingProvider>
          <ShowTypewriterProvider>
            <Component {...pageProps} />
            <ToastContainer />

          </ShowTypewriterProvider>
          </ChatLoadingProvider>
          </AppStateHandler>
        </ChatSelectedProvider>
      </DarkModeProvider>
    </UserProvider>
  );
}
