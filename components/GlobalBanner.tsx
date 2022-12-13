import React from "react";
import Heading from "../elements/Heading";
import Text from "../elements/Text";
import banner from "/public/images/banner.png";
import Image from "next/image";

function GlobalBaanner({ title, description, isrotate }: any) {
  return (
    <>
      <div className="relative max-w-[1800px] m-auto pt-4 lg:pt-20">
        <div className="absolute top-0 bottom-0">
          <Image src={banner} alt={"vscode"} objectFit="contain" />
        </div>
        <div className="container mx-auto text-center py-28">
          <div className="lg:px-[300px] relative">
            <Heading
              title={""}
              isLight={undefined}
              color={undefined}
              priority={1}
            >
              {!isrotate ? (
                title
              ) : (
                <div className="lg:px-[300px] relative rotate-6">
                  <Heading
                    title={""}
                    isLight={undefined}
                    color={undefined}
                    priority={1}
                  >
                    builds apps
                  </Heading>
                  <div className="absolute hidden h-4 border w-[460px] lg:block right-[380px]  bg-primary"></div>
                </div>
              )}
            </Heading>
            <div className="absolute hidden h-4 border w-[350px] lg:block right-80 bg-primary"></div>
          </div>

          <div className="flex py-8 justify-evenly ">
            <div className="w-full lg:w-[760px]">
              <Text style="para" size="md" font="light">
                {description}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobalBaanner;
