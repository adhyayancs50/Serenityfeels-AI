import dynamic from "next/dynamic";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firbase/initFirebase";
import { FullScreenLoader } from "@/components/loader";

const index = () => {
  useEffect(() => {
    signOut(auth);
  }, []);

  return (
    <>
    <FullScreenLoader/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
