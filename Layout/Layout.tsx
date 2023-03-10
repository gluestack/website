import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "../pages/_app";
import Cookies from "../components/Cookies";
import { Header } from "../components/Header";
import Image from "next/image";
import Meta from "../components/Meta";
import Script from "next/script";
import bannerDark from "../public/images/gradient-dark.png";
import bannerImg from "../public/images/gradient.svg";

function Layout({
  children,
  pageTitle,
  description,
  ogImgUrl,
  ogUrl,
  noAccess,
  style,
}: any) {
  //@ts-ignore

  const { darkMode } = useContext(AppContext);
  const [isMounted, setIsMounted] = useState(false);
  const dark = darkMode?.value ?? "dark";
  const Gradient = () => {
    return (
      <>
        {!dark ? (
          <div className="absolute top-0 left-0 w-full ">
            <Image src={bannerImg} alt="image" objectFit="contain" priority />
          </div>
        ) : (
          <div className="absolute top-0 left-0 w-full ">
            <Image src={bannerDark} alt="image" objectFit="contain" priority />
          </div>
        )}
      </>
    );
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className={`${style}  dark:bg-black-300`}>
      <Script src="//embed.typeform.com/next/embed.js"></Script>

      <Meta
        pageTitle={pageTitle}
        description={description}
        ogImgUrl={ogImgUrl}
        ogUrl={ogUrl}
      />
      <Cookies />
      <Header noAccess={noAccess} />
      {!isMounted ? <Gradient /> : <Gradient />}
      <div className=" lg:pt-20 pt-14 ">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
