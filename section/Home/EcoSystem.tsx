import React, { useContext, useEffect, useState } from "react";
import Heading from "../../elements/Heading";
import Gradient from "../../public/images/gradient-pink.png";
import Seal from "../../public/images/ecosystem/seal-logo-light.svg";
import SealDark from "../../public/images/ecosystem/seal-logo-dark.svg";
import Dsx from "../../public/images/ecosystem/dsx-logo-light.svg";
import DsxDark from "../../public/images/ecosystem/dsx-logo-dark.svg";
import CustomImage from "../../components/CustomImage";
import Text from "../../elements/Text";
import EcoSystemLight from "../../public/images/ecosystem/gluestack-ecosystem-light.svg";
import EcoSystemDark from "../../public/images/ecosystem/gluestack-ecosystem-dark.svg";
import InnerHeadding from "../../elements/InnerHeading";
import { AppContext } from "../../pages/_app";
import Image from "next/image";

function EcoSystem() {
  //@ts-ignore

  const { darkMode } = useContext(AppContext);
  const [isMounted, setIsMounted] = useState(false);
  const dark = darkMode?.value ?? "dark";
  const EcoSystemBanner = () => {
    useEffect(() => {
      setIsMounted(true);
    }, []);
    return (
      <>
        {!dark ? (
          <CustomImage src={EcoSystemLight} alt="EcoSystem" />
        ) : (
          <CustomImage src={EcoSystemDark} alt="EcoSystem" />
        )}
      </>
    );
  };
  const SealLogo = () => {
    return (
      <>
        {!dark ? (
          <CustomImage src={Seal} alt="seal-logo" />
        ) : (
          <CustomImage src={SealDark} alt="seal-logo" />
        )}
      </>
    );
  };
  const DsxLogo = () => {
    return (
      <>
        {!dark ? (
          <CustomImage src={Dsx} alt="dsx-logo" />
        ) : (
          <CustomImage src={DsxDark} alt="dsx-logo" />
        )}
      </>
    );
  };

  return (
    <div className="relative w-full ">
      <Image
        src={Gradient}
        alt="Gradient"
        objectFit="contain"
        className="absolute bottom-0 right-0 -z-10 dark:hidden block"
      />
      <div className="absolute top-0 left-0 bottom-0 right-0   dark:block hidden">
        <div className="dark-gradient h-full"></div>
      </div>
      <div className="container py-12 lg:py-32 relative">
        <div className="text-left lg:text-center lg:w-2/4	mx-auto w-full">
          <InnerHeadding
            first="Our Ecosystem."
            title="One-stop shop to build that product."
            priority="2"
          />
        </div>

        <div className="lg:pt-32 pt-10">
          <div className="grid lg:grid-cols-2 lg:gap-40 grid-cols-1 gap-4 items-center">
            <div className="pl-12 lg:pl-24 horizental-line relative py-8">
              <div className="dot relative">
                <div className="flex items-center justify-start">
                  <div className="mr-4 w-[83px] ">
                    {!isMounted ? <SealLogo /> : <SealLogo />}
                  </div>
                  {/* <Heading priority="6">
                    seal
                  </Heading> */}
                </div>
                <div className="pt-4 text-left">
                  <Text size="md">
                    We have an optional plugin that makes it easy to deploy any
                    gluestack app to the seal platform. seal is a hosting
                    service optimized and built for gluestack apps by the
                    creators of gluestack.
                  </Text>
                </div>
              </div>
              <div className="pt-16">
                <div className="dot relative text-center lg:text-left">
                  <div className="flex items-center justify-start">
                    <div className="mr-2 w-[86px] ">
                      {!isMounted ? <DsxLogo /> : <DsxLogo />}
                    </div>
                    <Heading priority="3">
                      <span className=" lg:text-lg text-md flex	">
                        (R&amp;D)
                      </span>
                      {/* <button className="tagsButton relative -top-2">
                        Upcoming
                      </button> */}
                    </Heading>
                  </div>
                </div>
                <div className="pt-4 text-left">
                  <Text size="md">
                    Build your design system using DSX to ship multiple products
                    faster with better collaboration, consistency, and
                    standardization.
                  </Text>
                </div>
              </div>
            </div>
            {!isMounted ? <EcoSystemBanner /> : <EcoSystemBanner />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcoSystem;
