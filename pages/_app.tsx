import GTMPageView from "../helper/gtm";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import PagesLayout from "../Layout";
import { useRouter } from "next/router";
import { versions, plugins } from "../versions.json";
import { PrevNextButtons } from "../Layout/components/PrevNextButtons";

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();

  let versionData = versions;
  let showBackButton = false;

  Object.keys(plugins).map((key) => {
    if (router.route.includes("/docs/0.1.x/" + key)) {
      // @ts-ignore
      versionData = plugins[key].versions;
      showBackButton = true;
    }
  });

  useEffect(() => {
    const handleRouteChange = ({ url }: any) => GTMPageView(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  const [version, setVersion]: any = useState(
    Object.keys(versionData[versionData.length - 1])
  );

  function getSidebarJsonData() {
    for (let i = 0; i < versionData.length; i++) {
      if (Object.keys(versionData[i])[0] == version) {
        return versionData[i];
      }
    }
  }

  if (router.pathname.includes("/docs")) {
    return (
      <PagesLayout
        version={version}
        versionInfo={getSidebarJsonData()}
        setVersion={setVersion}
        versionsData={versions}
        showBackButton={showBackButton}
      >
        <Component {...pageProps} />
        <PrevNextButtons />
      </PagesLayout>
    );
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;
