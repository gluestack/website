import GTMPageView from "../helper/gtm";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import data from "./docs/versions.json";
import { SessionProvider } from "next-auth/react";
import AuthContextProvider from "../auth-context";
import useDarkMode from "use-dark-mode";
import useAuthHook from "../auth-context/use-auth-hook";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";
import { MDXProvider } from "@mdx-js/react";
import { AppProvider, Layout } from "@gluestack/design-system";

// Import for the storybook-to-next-docs config
import storybookToNextDocs from "../storybook-to-next-docs.json";
// Imports for all the versions.json in storybook-to-next-docs version config
import frameworkSidebarData from "./docs/versions.json";
import authPluginSidebarData from "./docs/plugins/auth/versions.json";
import graphqlPluginSidebarData from "./docs/plugins/graphql/versions.json";
import postgresPluginSidebarData from "./docs/plugins/postgres/versions.json";
import enginePluginSidebarData from "./docs/plugins/engine/versions.json";
import minioPluginSidebarData from "./docs/plugins/minio/versions.json";
import storagePluginSidebarData from "./docs/plugins/storage/versions.json";

export const AppContext = React.createContext({} as unknown as any);

function MyApp({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  let versionData: any = {};

  let sideBarDataObject: any = {
    framework: frameworkSidebarData,
    "glue-plugin-auth": authPluginSidebarData,
    "glue-plugin-graphql": graphqlPluginSidebarData,
    "glue-plugin-postgres": postgresPluginSidebarData,
    "glue-plugin-engine": enginePluginSidebarData,
    "glue-plugin-minio": minioPluginSidebarData,
    "glue-plugin-storage": storagePluginSidebarData,
  };

  let repos = storybookToNextDocs.repos;
  let matchRepoId = "";

  for (let i = 0; i < repos.length; i++) {
    let largestMatchDestinationPath = "";

    for (let repo of repos) {
      if (
        router.pathname.startsWith(repo.destinationPath) &&
        repo.destinationPath?.length > largestMatchDestinationPath?.length
      ) {
        largestMatchDestinationPath = repo.destinationPath;
        matchRepoId = repo.id;
      }
    }
  }

  let latestVersion: number = 0;
  let sidebarData: any = {};
  let breadcrumbs: any = {};

  versionData = sideBarDataObject[matchRepoId];

  let versions = versionData?.versions;
  if (versions) {
    latestVersion = versions[versions?.length - 1]?.version;
    sidebarData = versions[versions?.length - 1]?.pages;
    breadcrumbs = versions[versions?.length - 1]?.breadcrumbs;
  }

  useEffect(() => {
    const handleRouteChange = ({ url }: any) => GTMPageView(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

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
      <DocsLayoutRender
        router={router}
        darkMode={darkMode}
        version={latestVersion}
        sidebarData={sidebarData}
        versions={versions}
        breadcrumbs={breadcrumbs}
      >
        {children}
      </DocsLayoutRender>
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
      <SessionProvider session={session}>
        <AuthContextProvider>
          <MyApp>
            <Component {...pageProps} />
          </MyApp>
        </AuthContextProvider>
      </SessionProvider>
    </>
  );
};

export default App;

interface IDocsLayoutRender {
  children: React.ReactNode;
  versions: any;
  version: any;
  sidebarData: any;
  darkMode: any;
  router: any;
  breadcrumbs: any;
}

const DocsLayoutRender = ({
  children,
  darkMode,
  version,
  sidebarData,
  versions,
  router,
  breadcrumbs,
}: IDocsLayoutRender) => {
  const docsLayoutRef = useRef(null);
  const [colorMode, setColorMode] = React.useState("dark");
  const toggleColorMode = async () => {
    colorMode === "light" ? setColorMode("dark") : setColorMode("light");
  };

  useEffect(() => {
    if (docsLayoutRef?.current) {
      //@ts-ignore
      docsLayoutRef?.current?.scrollTo(0, 0);
    }
  }, [router.pathname]);

  const headerItems = {
    left: [
      {
        type: "image",
        url: "/images/logo/lightLogo.svg",
        darkModeUrl: "/images/logo/darkLogo.svg",
      },
    ],
    right: [
      {
        type: "link",
        url: "https://github.com/gluestack/framework",
        icon: (
          <Image
            src="/icon/social/github.svg"
            alt="Github"
            height="24"
            width="24"
          />
        ),
        darkIcon: (
          <Image
            src="/icon/social/github-dark.svg"
            alt="Github"
            height="24"
            width="24"
          />
        ),
        text: "github",
      },
      {
        type: "link",
        url: "https://discord.com/invite/95qQ84nf6f",
        icon: (
          <Image
            src="/icon/social/discord.svg"
            alt="Github"
            height="24"
            width="24"
          />
        ),
        darkIcon: (
          <Image
            src="/icon/social/discord-dark.svg"
            alt="Github"
            height="24"
            width="24"
          />
        ),
        text: "discord",
      },
    ],
    center: [{}],
  };

  return (
    // <MDXProvider
    //   components={{
    //     pre: (props: any) => {
    //       console.log(props);
    //       return (
    //         //@ts-ignore
    //         <pre {...props} />
    //       );
    //     },
    //   }}
    // >
    <Layout
      ref={docsLayoutRef}
      version={version}
      sidebarItems={sidebarData}
      headerItems={headerItems}
      router={router}
      Link={Link}
      MDXProvider={MDXProvider}
      Image={Image}
      colorMode={colorMode}
      toggleColorMode={toggleColorMode}
      breadcrumbs={breadcrumbs}
    >
      {children}
    </Layout>
    // </MDXProvider>
  );
};
