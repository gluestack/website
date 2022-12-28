import React, { useContext } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Meta from "../components/Meta";
import Cookies from "../components/Cookies";
import Image from "next/image";
import bannerImg from "../public/images/gradient.svg";
import Script from "next/script";
import bannerDark from "../public/images/gradient-dark.png";
import { AppContext } from "../pages/_app";

function Layout({
  children,
  pageTitle,
  description,
  ogImgUrl,
  ogUrl,
  noAccess,
  
}: any) {
    //@ts-ignore

  const { darkMode } = useContext(AppContext);
  const [isMounted, setIsMounted] = React.useState(false);
  const dark = darkMode?.value ?? "dark";
  const Gradient = () => {
    return (
      <>
        {!dark ? (
          <Image
            src={bannerImg}
            alt="image"
            objectFit="contain"
          />
        ) : (
          <Image
            src={bannerDark}
            alt="image"
            objectFit="contain"
          />
        )}
      </>
    );
  };
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="min-h-screen dark:bg-black-300">
      <Script src="//embed.typeform.com/next/embed.js"></Script>

      <Meta
        pageTitle={pageTitle}
        description={description}
        ogImgUrl={ogImgUrl}
        ogUrl={ogUrl}
      />
      <Cookies />
      <Header noAccess={noAccess} />
      <div className="absolute top-0 left-0 w-full ">
        {!isMounted ? <Gradient /> : <Gradient />}
      </div>
      <div className=" lg:pt-20 pt-14 ">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
