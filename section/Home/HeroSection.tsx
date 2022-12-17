import React from "react";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";
import Banner from "../../components/Banner";
import Button from "../../components/Button";
import gifSteps from "../../public/animation/animation.gif";
import Image from "next/image";
import Script from 'next/script'
function HeroSection() {
  return (
    <>
      <Script src="//embed.typeform.com/next/embed.js"></Script>
      <Banner cover={''} altText="banner">
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
                  building modern web & mobile apps. Build effortlessly and
                  scale swiftly from idea to enterprise.
                </Text>
              </div>
              <div className="herobtn">
                <Button
                  xxl
                  isSecondary
                  dataId="QWcoG0YF"
                >
                  Join the waitlist for early access{" "}
                </Button>
                {/* <span className="btn_outline group">
                <button
                  data-tf-popup="QWcoG0YF"
                  className="text-white capitalize bg-primary ring-primary ring-offset-primary btn"
                >
                  Join the waitlist for early access
                </button>
                </span> */}
              </div>
            </div>
          </div>
          <div className="heroImage">
            <Image src={gifSteps} alt="image" />
            {/* <Animation data={animationData} /> */}
          </div>
        </div>
      </Banner>
    </>
  );
}

export default HeroSection;
