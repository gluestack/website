import { useRouter } from "next/router";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Meta from "../components/Meta/Meta";

function Layout({ children }) {
  const router = useRouter();
  const pageTitle = (str) => {
    return str.charAt(1).toUpperCase() + str.slice(2);
  };
  return (
    <>
      <Meta title={pageTitle(router.asPath)} ogUrl={`localhost:3000${router.asPath}`}/>
      <Header/>
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
