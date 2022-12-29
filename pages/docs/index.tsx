import React, { useEffect } from "react";
import useAuthHook from "../../auth-context/use-auth-hook";
import { useRouter } from "next/router";

export default function() {
  const [user, isLoading] = useAuthHook();
  const router = useRouter() as any;

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push("/");
      }
    }
    if (isLoading) {
      if (!user) {
        router.push("/");
      }
    }
  }, [isLoading]);

 

  if (user) {
    return <></>;
  }
  return <></>;
}
