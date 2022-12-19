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




import  GTMPageView  from "../helper/gtm";
import React, { useEffect } from "react";
// import { Router } from "next/router";
import "../styles/globals.css";
 import PagesLayout from "../Layout";
 import { useRouter } from "next/router";

function MyApp({ Component, pageProps } :any) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = ({url}:any) => GTMPageView(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
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

export default MyApp;
