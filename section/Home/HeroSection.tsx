import React, { useContext } from "react";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";
import Banner from "../../components/Banner";
import Button from "../../components/Button";
import light from "../../public/images/light.gif";
import darkImg from "../../public/images/dark.gif";
import { AppContext } from "../../pages/_app";

import Image from "next/image";

function HeroSection() {
    //@ts-ignore

  const { darkMode } = useContext(AppContext);
  const [isMounted, setIsMounted] = React.useState(false);
  const dark = darkMode?.value ?? "dark";
  const BannerImg = () => {
    return (
      <>
        {!dark ? (
          <Image src={light} alt="image" />
        ) : (
          <Image src={darkImg} alt="image" />
        )}
      </>
    );
  };
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <Banner>
        <div className="grid lg:grid-cols-2 grid-cols-1  items-center">
          <div className="sm:px-[148px] lg:px-0">
            <Heading priority={1}>One stack for web, mobile & backend</Heading>
            <div className="pt-9">
              <Text size={"lg"}>
                <span className="font-displaySemibold">100% open source </span>
                full-stack framework that takes away the complexities of
                building modern web & mobile apps. Build effortlessly and scale
                swiftly from idea to enterprise.
              </Text>
            </div>
            <div className="mt-12">
              <Button size="xxl" type="primary" dataId="QWcoG0YF">
                <div className="flex items-center">
                  Sign up for early access
                </div>
              </Button>
            </div>
          </div>

          <div className=" sm:mt-10 lg:mt-0">
            {!isMounted ? <BannerImg /> : <BannerImg />}
          </div>
        </div>
      </Banner>
    </>
  );
}

export default HeroSection;
