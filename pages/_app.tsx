// import React,{useEffect} from "react";
// import "../styles/globals.css";
// import type { AppProps } from "next/app";
// import { useRouter } from "next/router";
// import PagesLayout from "../Layout";
// import { GTMPageView } from "../helper/gtm";

// export default function App({ Component, pageProps }: AppProps) {

//   useEffect(() => {
//     const handleRouteChange = (url) => GTMPageView(url);
//     Router.events.on("routeChangeComplete", handleRouteChange);
//     return () => {
//       Router.events.off("routeChangeComplete", handleRouteChange);
//     };
//   }, []);
//   const router = useRouter();

//   if (router.pathname.includes("/docs")) {
//     return (
//       <PagesLayout>
//         <Component {...pageProps} />
//       </PagesLayout>
//     );
//   } else {
//     return (
//         <Component {...pageProps} />
//     );
//   }
// }

import GTMPageView from "../helper/gtm";
import React, { useEffect, useState } from "react";
// import { Router } from "next/router";
import "../styles/globals.css";
import PagesLayout from "../Layout/PagesLayout";
import { useRouter } from "next/router";
import { versions, plugins } from "../versions.json";

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

  // plugins.forEach((plugin) => {
  //   if (router.route.includes("/docs/0.1.x/" + plugin)) {
  //     versionPath = "./docs/0.1.x/" + plugin + "/versions.json";
  //   }
  // });

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
      </PagesLayout>
    );
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;
