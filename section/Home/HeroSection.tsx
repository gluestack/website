// import { url } from "inspector";
import React from "react";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";
import banner from "/public/images/banner.png";
import heroBanner from "/public/images/bannerbackground.png";
import Image from "next/image";
import Banner from "../../components/Banner";
import Button from "../../components/Button";
function HeroSection() {
  return (
    <Banner cover={banner} altText="banner">
      <div className="herobanner">
        <div className="heroflex">
          <div className="heroHead">
            <Heading isLight={false} priority={1}>
              One stack for web, mobile, & backend
            </Heading>
            <div className="herotext md:w-5/7">
              <Text size={"lg"} style="font-normal">
                <span className="font-semibold">100% open source </span>
                 full-stack framework that takes away the complexities of
                building modern web & mobile apps. Build effortlessly and scale
                swiftly from idea to enterprise.
              </Text>
            </div>
            <div className="herobtn">
              <Button xxl isSecondary link={''} >Join the waitlist for early access</Button>
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
