import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import NewsLetter from "../components/NewsLetter";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <NewsLetter/>
      <Footer />
    </>
  );
}

export default Layout;
