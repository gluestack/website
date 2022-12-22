import GTMPageView from "../helper/gtm";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import PagesLayout from "../Layout/PagesLayout";
import { useRouter } from "next/router";
import { versions, plugins } from "../versions.json";
import { PrevNextButtons } from "../components/docs/PrevNextButtons";
import { SessionProvider } from "next-auth/react";
import AuthContextProvider from "../auth-context";

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

  if (router.pathname.includes("/docs")) {
    return (
      <PagesLayout
        version={version}
        versionInfo={getSidebarJsonData()}
        setVersion={setVersion}
        versionsData={versions}
        showBackButton={showBackButton}
      >
        {children}
        <PrevNextButtons />
      </PagesLayout>
    );
  } else {
    return <>{children}</>;
  }
}

const App = ({ Component, pageProps: { session, ...pageProps } }: any) => {
  return (
    <>
      <SessionProvider session={session}>
        <AuthContextProvider>
          <MyApp>
            <Component {...pageProps} />;
          </MyApp>
        </AuthContextProvider>
      </SessionProvider>
    </>
  );
};

export default App;