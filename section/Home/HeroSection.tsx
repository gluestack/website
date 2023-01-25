import React, { useContext,useEffect,useState } from "react";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";
import Banner from "../../components/Banner";
import Button from "../../components/Button";
import light from "../../public/images/animatedImgs/light.svg";
import darkImg from "../../public/images/animatedImgs/dark.svg";
import { AppContext } from "../../pages/_app";
import CustomImage from "../../components/CustomImage";

import Image from "next/image";

function HeroSection() {
    //@ts-ignore

  const { darkMode } = useContext(AppContext);
  const [isMounted, setIsMounted] = useState(false);
  const dark = darkMode?.value ?? "dark";
  const BannerImg = () => {
    return (
      <>
        {!dark ? (
          <CustomImage src={light} alt="Fulll-stack" />
        ) : (
          <CustomImage src={darkImg} alt="full-stack" />
        )}
      </>
    );
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <Banner>
        <div className="grid lg:grid-cols-5 grid-cols-1  items-center">
          <div className="lg:col-span-2 xl:py-[138px]">
            <Heading priority={1}>One stack for web, mobile & backend</Heading>
            <div className="pt-9">
              <Text size={"lg"}>
                <span className="font-semibold">100% open source </span>
                full-stack framework that takes away the complexities of
                building modern web & mobile apps. Build effortlessly and scale
                swiftly from idea to enterprise.
              </Text>
            </div>
            <div className="mt-12">
              {/* <Button size="xxl" type="primary" dataId="QWcoG0YF"> */}
              <Button size="xxl" type="primary" link="/docs">
                  Get Started
              </Button>
            </div>
          </div>

          <div className=" sm:mt-10 lg:mt-0 lg:col-span-3">
            {!isMounted ? <BannerImg /> : <BannerImg />}
          </div>
        </div>
      </Banner>
    </>
  );
}

export default HeroSection;
