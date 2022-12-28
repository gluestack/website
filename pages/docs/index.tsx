import React, { useEffect } from "react";
import useAuthHook from "../../auth-context/use-auth-hook";
import { useRouter } from "next/router";

export default function() {
  const [user, isLoading] = useAuthHook();
  const router = useRouter() as any;

  // FETCHING USER DETAILS

  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/");
    }
  });

  if (isLoading) {
    return <></>;
  }

  if (user && !isLoading) {
    return <></>;
  }
  return <></>;
}
