import GTMPageView from "../helper/gtm";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import PagesLayout from "../Layout/PagesLayout";
import { useRouter } from "next/router";
import { versions, plugins } from "../versions.json";
import { PrevNextButtons } from "../components/docs/PrevNextButtons";
import useDarkMode from "use-dark-mode";

export const AppContext = React.createContext(null);

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();

  let versionData = versions;
  let showBackButton = false;

  Object.keys(plugins).map(key => {
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
  const darkMode = useDarkMode(false, {
    onChange: (state: any) => {
      console.log({ state });
      const htmlElement = document.documentElement;
      if (state) {
        htmlElement.classList.add("dark");
        htmlElement.classList.remove("light");
      } else {
        htmlElement.classList.add("light");
        htmlElement.classList.remove("dark");
      }
    }
  });

  if (router.pathname.includes("/docs")) {
    return (
      //@ts-ignore
      <AppContext.Provider value={darkMode}>
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
      </AppContext.Provider>
    );
  } else {
    return (
      //@ts-ignore
      <AppContext.Provider value={{ darkMode }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    );
  }
}

export default MyApp;
