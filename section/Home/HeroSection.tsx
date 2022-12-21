import React from "react";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";
import Banner from "../../components/Banner";
import Button from "../../components/Button";
// import gifSteps from "../../public/animation/animation.gif";
import light from "../../public/images/light.gif";
import dark from "../../public/images/dark.gif";

import Image from "next/image";
import Script from "next/script";
import { FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <>
      <Script src="//embed.typeform.com/next/embed.js"></Script>
      <Banner>
        <div className="grid lg:grid-cols-2 grid-cols-1  items-center">
          <div className="sm:px-[148px] lg:px-0">
            <Heading  priority={1}>
              One stack for web, mobile, & backend
            </Heading>
            <div className="pt-9">
              <Text size={"lg"} style="font-display ">
                <span className="font-displaySemibold">100% open source </span>
                full-stack framework that takes away the complexities of
                building modern web & mobile apps. Build effortlessly and scale
                swiftly from idea to enterprise.
              </Text>
            </div>
            <div className="mt-12">
              <Button xxl isSecondary dataId="QWcoG0YF">
                <div className="flex items-center">
                  <div className="pr-4">
                    <FaGithub />
                  </div>
                  Signup for early access{" "}
                </div>
              </Button>
            </div>
          </div>

          <div className="dark:hidden block sm:mt-10 lg:mt-0">
            <Image src={light} alt="image" />
            {/* <Animation data={animationData} /> */}
          </div>
          <div className="dark:block hidden sm:mt-10 lg:mt-0">
            <Image src={dark} alt="image" />
            {/* <Animation data={animationData} /> */}
          </div>
        </div>
      </Banner>
    </>
  );
}

export default HeroSection;
