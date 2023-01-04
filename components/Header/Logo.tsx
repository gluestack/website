import Link from "next/link";
import React, { useContext,useState,useEffect } from "react";
import logo from "/public/images/logo/lightLogo.svg";
import logodark from "/public/images/logo/darkLogo.svg";
import { AppContext } from "../../pages/_app";
import CustomImage from "../CustomImage";

function Logo({ darkLogo }: any) {
  //@ts-ignore
  const { darkMode } = useContext(AppContext);
  const [isMounted, setIsMounted] = useState(false);
  const dark = darkMode?.value ?? "dark";
  const LogoWrap = () => {
    return (
      <Link href="/" passHref legacyBehavior>
        <a className="inline-flex items-center">
          {!dark ? (
            <div className=" lg:w-[200px] w-[150px]">
              <CustomImage src={darkLogo ? logodark : logo} alt="gluestack" />
            </div>
          ) : (
            <div className=" lg:w-[200px] w-[150px]">
              <CustomImage src={darkLogo ? logo : logodark} alt="gluestack" />
            </div>
          )}
        </a>
      </Link>
    );
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return <LogoWrap />;
  return <LogoWrap />;
}

export default Logo;
