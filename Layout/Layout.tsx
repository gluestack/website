import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Meta from "../components/Meta";
import Cookies from "../components/Cookies";

function Layout({ children,title,description, ogImgUrl, ogUrl }: any) {
  return (
    <>
      <Meta title={title} description={description} ogImgUrl={ogImgUrl} ogUrl={ogUrl} />
      <Cookies />
      <Header/>
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
