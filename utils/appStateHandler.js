import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useUser } from "@/context/user";
import { FullScreenLoader } from "@/components/loader";

const AppStateHandler = ({ children }) => {
  const { appState, loading, setLoading } = useUser();
  const router = useRouter();

  const whitelist = ["/signupcopy","/signup","/login", "/forgot-password", "/verify-email","/","/dashboard"];

  const redirect = () => {
    // console.log("before home")
    console.log("redirect appstate",appState)
    console.log("appstate handler loading ", loading)
    // if (!loading) {
      console.log(router.pathname)
      if (!whitelist.includes(router.pathname) && (appState === "login")) {
        return router.push("/login").then(() => {
          setLoading(false);
          
        });
      }

      if (
        appState === "dashboard" &&
        (router.pathname === "/signup" || router.pathname === "/login"|| router.pathname === "/verify-email"|| router.pathname === "/forgot-password")
      ) {
        return router.push("/").then(() => {
          setLoading(false);
          
        });
      }
    //  }
  };

  useEffect(() => {
    redirect();
  }, [appState, router, loading]);

  if (loading && !whitelist.includes(router.pathname)){
    console.log("FullScreenLoader")
    return <FullScreenLoader />;
  }

  return <>{children}</>;
};

export default AppStateHandler;
