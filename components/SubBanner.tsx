import React from "react";
import Image from "next/image";
import Heading from "../elements/Heading";
import Button from "./Button";
import Description from "../elements/Description";

function SubBanner({ heading, desc, src, btntext, isright,altText }: any) {
  return (
    <>
      <div className="container mx-auto">
        <div className="py-12 lg:py-28">
          <div
            className={`flex flex-wrap items-center ${
              isright
                ? "flex-col-reverse lg:flex-row"
                : "flex-col-reverse  lg:flex-row-reverse"
            } `}
          >
            <div className="py-8 md:py-0 lg:w-1/2">
              <div className="flex items-center justify-center xl:px-0 ">
                <div className="sm:max-w-[480px]">
                  <Heading
                    priority={2}
                  >
                    {heading}
                  </Heading>
                  <Description>{desc}</Description>
                  <div className="py-8">
                    <Button size="lg">{btntext}</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 ">
              <Image src={src} alt={altText || "Banner"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubBanner;
