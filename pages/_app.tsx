import GTMPageView from "../helper/gtm";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import PagesLayout from "../Layout/PagesLayout";
import { useRouter } from "next/router";
import { versions, plugins } from "../versions.json";
import { PrevNextButtons } from "../components/docs/PrevNextButtons";
import { GlueProvider } from "@gluestack/glue-client-sdk-react";
import useDarkMode from "use-dark-mode";
import useAuthHook from "../auth-context/use-auth-hook";
import glue from "../glue";
import { AuthContextProvider } from "../auth-context";

export const AppContext = React.createContext(({} as unknown) as any);

function MyApp({ children }: { children: React.ReactNode }) {
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
  const darkMode = useDarkMode(false, {
    onChange: (state: any) => {
      const htmlElement = document.documentElement;
      if (state) {
        htmlElement.classList.add("dark");
        htmlElement.classList.remove("light");
      } else {
        htmlElement.classList.add("light");
        htmlElement.classList.remove("dark");
      }
    },
  });

  if (router.pathname.includes("/docs")) {
    return (
      <>
        <DocsLayoutRender
          darkMode={darkMode}
          version={version}
          setVersion={setVersion}
          versionInfo={getSidebarJsonData()}
          versions={versions}
          showBackButton={showBackButton}
        >
          {children}
        </DocsLayoutRender>
      </>
    );
  } else {
    return (
      <AppContext.Provider value={{ darkMode }}>{children}</AppContext.Provider>
    );
  }
}

const App = ({ Component, pageProps: { session, ...pageProps } }: any) => {
  return (
    <>
      <GlueProvider glue={glue}>
        <AuthContextProvider>
          <MyApp>
            <Component {...pageProps} />
          </MyApp>
        </AuthContextProvider>
      </GlueProvider>
    </>
  );
};

export default App;

interface IDocsLayoutRender {
  children: React.ReactNode;
  versions: any;
  version: any;
  versionInfo: any;
  setVersion: (_v: any) => void;
  showBackButton: boolean;
  darkMode: any;
}

const DocsLayoutRender = ({
  children,
  darkMode,
  version,
  versionInfo,
  setVersion,
  versions,
  showBackButton,
}: IDocsLayoutRender) => {
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
    return (
      <>
        <AppContext.Provider value={{ darkMode }}>
          <PagesLayout
            version={version}
            versionInfo={versionInfo}
            setVersion={setVersion}
            versionsData={versions}
            showBackButton={showBackButton}
          >
            {children}
            <PrevNextButtons />
          </PagesLayout>
        </AppContext.Provider>
      </>
    );
  }

  return <></>;
};