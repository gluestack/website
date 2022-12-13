import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
// @ts-ignore
import { Layout } from "@gluestack/docs-layout";
import { useState } from "react";
import { versions } from "../versions.json";

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps, "PAGE PROPS");
  const router = useRouter();
  console.log(router.pathname);
  const [version, setVersion]: any = useState(
    Object.keys(versions[versions.length - 1])
  );

  function getSidebarJsonData() {
    for (let i = 0; i < versions.length; i++) {
      if (Object.keys(versions[i])[0] == version) {
        return versions[i];
      }
    }
  }
  if (router.pathname.includes("/docs")) {
    return (
      // <Layout
      // // version={version}
      // // versionInfo={getSidebarJsonData()}
      // // setVersion={setVersion}
      // // versionsData={versions}
      // >
      <Component {...pageProps} />
      // </Layout>
    );
  } else {
    return (
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    );
  }
}
