import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../Layout/Layout";
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
      <Layout>
        <Component {...pageProps} />
     </Layout>
    );
  }
}
