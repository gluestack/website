import React from "react";
import Heading from "../../elements/Heading";
import Gradient from "../../public/images/gradient-pink.png";
import seal from "../../public/images/seal.png";
import CustomImage from "../../components/CustomImage";
import Text from "../../elements/Text";
import ecoSystem from "../../public/images/ecosystem.png";
import InnerHeadding from "../../elements/InnerHeading";

import Image from "next/image";

function EcoSystem() {
  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 right-0 -z-10">
        <Image src={Gradient} alt="image" objectFit="contain" />
      </div>
      <div className="container py-32 relative">
        <div className="text-center lg:w-2/4	mx-auto w-full">
        <InnerHeadding first="Our Ecosystem." title="One-stop shop to build that product." priority="2" />
        </div>

      
        <div className="lg:pt-32 pt-18">
          <div className="grid lg:grid-cols-2 lg:gap-40 grid-cols-1 gap-4 items-center">
            <div className="lg:pl-32 pl-0 horizental-line relative py-8">
              <div className="dot relative">
                <div className="flex items-center justify-center lg:justify-start">
                  <div
                   
                    className="mr-4 w-[40px] h-[36px] "
                  >
                    <CustomImage src={seal} alt="seal-logo" />
                  </div>
                  <Heading priority="6" style="">seal</Heading>
                </div>

                <Text size="md" style="pt-4 text-center lg:text-left">
                  We have an optional plugin that makes it easy to deploy any
                  gluestack app to the seal platform. seal is a hosting service
                  optimized and built for gluestack apps by the creators of
                  gluestack.
                </Text>
              </div>
              <div className="pt-16">
                <div className="dot relative text-center lg:text-left">
                  <Heading priority="6">Design System <button className="tagsButton relative -top-2">Upcoming</button></Heading>
                </div>

                <Text size="md" style="pt-4 text-center lg:text-left">
                Create your Design System using our platform designed to create UI standards and components. Coming soon.
                </Text>
              </div>
            </div>
            <div>
              <CustomImage src={ecoSystem} alt="EcoSystem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcoSystem;
