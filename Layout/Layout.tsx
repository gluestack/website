import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Meta from "../components/Meta";
import Cookies from "../components/Cookies";
import Image from "next/image";
import bannerImg from "../public/images/gradient.png"

function Layout({ children,title,description, ogImgUrl, ogUrl }: any) {
  return (
    <>
      <Meta title={title} description={description} ogImgUrl={ogImgUrl} ogUrl={ogUrl} />
      <Cookies />
      <Header/>
      <div className="absolute top-0 left-0 w-full -z-10">
        <Image src={bannerImg} alt="image" objectFit="contain"  />
      </div> 
      <div className="dark:bg-black-300 pt-20">
      {children}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
