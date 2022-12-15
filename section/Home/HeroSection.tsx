// import { url } from "inspector";
import React from "react";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";
import banner from "/public/images/banner.png";
import heroBanner from "/public/images/bannerbackground.png";
import Image from "next/image";
import Banner from "../../components/Banner";
function HeroSection() {
  return (
    <Banner cover={banner} altText="banner">
      <div className="herobanner">
        <div className="herotext">
          <div className="py-10 text-center sm:text-start">
            <Heading isLight={false} priority={1}>
              One stack for web, mobile, & backend
            </Heading>
            <div className="pt-2 md:w-10/12">
              <Text size={"lg"} style="font-normal">
                <span className="font-semibold">100% open source</span>
                full-stack framework that takes away the complexities of
                building modern web & mobile apps. Build effortlessly and scale
                swiftly from idea to enterprise.
              </Text>
            </div>
          </div>
        </div>
        <div className="heroImage">
          <Image src={heroBanner} alt={""} />
        </div>
      </div>
    </Banner>
  );
}

export default HeroSection;
