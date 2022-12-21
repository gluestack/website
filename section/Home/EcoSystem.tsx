import React from "react";
import Heading from "../../elements/Heading";
import Gradient from "../../public/images/gradient-pink.png";
import seal from "../../public/images/seal.png";
import CustomImage from "../../components/CustomImage";
import Text from "../../elements/Text";
import ecoSystem from "../../public/images/ecosystem.png";

import Image from "next/image";

function EcoSystem() {
  return (
    <div className="gradient-dark relative w-full">
      <div className="absolute bottom-0 right-0 -z-10">
        <Image src={Gradient} alt="image" objectFit="contain" />
      </div>
      <div className="container py-32 relative">
        <Heading priority="2" style="text-center">
          <span className="text-primary"> Our Ecosystem. </span>
          One-stop shop
          <br /> to build that product.
        </Heading>
        <div className="pt-32">
          <div className="grid lg:grid-cols-2 lg:gap-40 grid-cols-1 gap-4 items-center">
            <div className="lg:pl-32 pl-0 horizental-line relative py-8">
              <div className="dot relative">
                <div className="flex items-center">
                  <div
                    style={{ width: "40px", height: "36px" }}
                    className="mr-4"
                  >
                    <CustomImage src={seal} alt="seal-logo" />
                  </div>
                  <Heading priority="6">Seal</Heading>
                </div>

                <Text size="md" style="pt-4">
                  We have an optional plugin that makes it easy to deploy any
                  gluestack app to the Seal platform. Seal is a hosting service
                  optimized and built for gluestack apps by the creators of
                  gluestack.
                </Text>
              </div>
              <div className="pt-16">
                <div className="dot relative">
                  <Heading priority="6">Design System</Heading>
                </div>

                <Text size="md" style="pt-4">
                  We have an optional plugin that makes it easy to deploy any
                  gluestack app to the Seal platform. Seal is a hosting service
                  optimized and built for gluestack apps by the creators of
                  gluestack.
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