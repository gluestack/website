import React, { useEffect } from "react";
import useAuthHook from "../../auth-context/use-auth-hook";
import { useRouter } from "next/router";

export default function() {
  const [user, isLoading] = useAuthHook();
  const router = useRouter() as any;

  useEffect(() => {
    if (!isLoading) {
      if (!user && !isLoading) {
        router.push("/");
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return <></>;
  }

  if (user) {
    return <></>;
  }
  return <></>;
}
