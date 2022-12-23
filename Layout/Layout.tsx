import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Meta from "../components/Meta";
import Cookies from "../components/Cookies";
import Image from "next/image";
import bannerImg from "../public/images/gradient.png"
import Script from "next/script";
import bannerDark from "../public/images/gradient-dark.png"


function Layout({ children,pageTitle,description, ogImgUrl, ogUrl, noAccess }: any) {
  return (
    <>
          <Script src="//embed.typeform.com/next/embed.js"></Script>

      <Meta pageTitle={pageTitle} description={description} ogImgUrl={ogImgUrl} ogUrl={ogUrl} />
      <Cookies />
      <Header noAccess={noAccess} />
      <div className="absolute top-0 left-0 w-full ">
        <Image src={bannerImg} alt="image" objectFit="contain"   className="dark:hidden block" />
        <Image src={bannerDark} alt="image" objectFit="contain"   className="dark:block hidden" />

      </div> 
      <div className="dark:bg-black-300 pt-20 min-h-screen">
      {children}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
