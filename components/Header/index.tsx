import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Logo from "./Logo";
import Button from "../Button";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
const Modal = dynamic(() => import("../modal"));
import SearchBar from "./SearchBar";
import React from "react";
import useDarkMode from "../useDarkMode";

export const Header = () => {
  const [expand, setExpand] = useState(false);
  const [showModel, setModel] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();


  useEffect(() => {
    if (expand) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [expand]);

  return (
        <div className="container py-6">
          <Logo />
          <div className="flex md:order-2">
            {/* <div
              onClick={() => setModel(!showModel)}
              className="mt-2 cursor-pointer"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div> */}
            <Modal
              height="3/6"
              isVisible={showModel}
              onClose={() => setModel(false)}
            >
              <SearchBar />
            </Modal>
            {/* <div className="hidden lg:block">
              <Button link="/docs">DOCUMENTATION</Button>
            </div> */}
            {/* <Hamburger setExpand={setExpand} expand={expand} /> */}
          </div>
          {/* <Menu expand={expand} /> */}


          {colorTheme === "light" ? (
  <svg
    onClick={() => setTheme("light")}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
) : (
  <svg
    onClick={() => setTheme("dark")}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
)}
          
        </div>
  );
};
