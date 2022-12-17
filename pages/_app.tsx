import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import PagesLayout from "../Layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.includes("/docs")) {
    return (
      <PagesLayout>
        <Component {...pageProps} />
      </PagesLayout>
    );
  } else {
    return (
        <Component {...pageProps} />
    );
  }
}
