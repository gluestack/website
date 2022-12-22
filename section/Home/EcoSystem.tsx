import React from "react";
import Heading from "../../elements/Heading";
import Gradient from "../../public/images/gradient-pink.png";

import seal from "../../public/images/seal.png";
import CustomImage from "../../components/CustomImage";
import Text from "../../elements/Text";
import ecoSystemLight from "../../public/images/echosystem-light.svg";
import ecoSystemDark from "../../public/images/echosystem-dark.svg";

import InnerHeadding from "../../elements/InnerHeading";


import Image from "next/image";

function EcoSystem() {
  
  

 
  return (
    <div className="relative w-full ">
      <div className="absolute bottom-0 right-0 -z-10 dark:hidden block">
        <Image src={Gradient} alt="image" objectFit="contain" />
      </div>
      <div className="absolute top-0 left-0 bottom-0 right-0   dark:block hidden">
        <div className="dark-gradient h-full"></div>
      </div>
      <div className="container py-32 relative">
        <div className="text-center lg:w-2/4	mx-auto w-full">
        <InnerHeadding first="Our Ecosystem." title="One-stop shop to build that product." priority="2" />
        </div>

      
        <div className="lg:pt-32 pt-18">
          <div className="grid lg:grid-cols-2 lg:gap-40 grid-cols-1 gap-4 items-center">
            <div className="lg:pl-24 pl-0 horizental-line relative py-8">
              <div className="dot relative">
                <div className="flex items-center justify-center lg:justify-start">
                  <div
                   
                    className="mr-4 w-[40px] h-[36px] "
                  >
                    <CustomImage src={seal} alt="seal-logo" />
                  </div>
                  <Heading priority="6" style="">seal</Heading>
                </div>
                <div className="pt-4 text-center lg:text-left">

                <Text size="md" >
                  We have an optional plugin that makes it easy to deploy any
                  gluestack app to the seal platform. seal is a hosting service
                  optimized and built for gluestack apps by the creators of
                  gluestack.
                </Text>
                </div>
              </div>
              <div className="pt-16">
                <div className="dot relative text-center lg:text-left">
                  <Heading priority="6">Design System <button className="tagsButton relative -top-2">Upcoming</button></Heading>
                </div>
                <div className="pt-4 text-center lg:text-left">

                <Text size="md" >
                Create your Design System using our platform designed to create UI standards and components. Coming soon.
                </Text>
                </div>
              </div>
            </div>
            <div className="dark:hidden block">
              <CustomImage src={ecoSystemLight} alt="EcoSystem" />
            </div>
            <div className="dark:block hidden">
              <CustomImage src={ecoSystemDark} alt="EcoSystem" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default EcoSystem;
