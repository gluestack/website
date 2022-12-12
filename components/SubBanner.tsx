import React from "react";
import Image from "next/image";
import vscode from "../public/images/vscode.png";
import Heading from "../elements/Heading";
import Text from "../elements/Text";
import Button from "./Button";

function SubBanner({ heading, desc, src, btntext, isright }: any) {
  return (
    <>
      <div className="container mx-auto">
        <div className="py-12 lg:py-28">
        {/* <span className="hidden absolute bg-gradient-to-l from-primary opacity-[.15] pointer-events-none lg:inline-flex right-[-20%] top-0 w-[640px] h-[640px]"></span> */}
          <div
            className={`flex flex-wrap  ${
              isright
                ? "flex-col-reverse lg:flex-row"
                : "flex-col-reverse  lg:flex-row-reverse"
            } `}
          >
            <div className="py-8 md:py-0 lg:w-1/2">
              <div className="flex items-center justify-center xl:px-0 ">
                <div className="sm:max-w-[480px]">
                  <Heading
                    title={undefined}
                    isLight={undefined}
                    color={undefined}
                    priority={2}
                  >
                    {heading}
                  </Heading>
                  <Text style="leading-relaxed">{desc}</Text>
                  <div className="py-8">
                    <Button lg>{btntext}</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 ">
              <Image src={src} alt={"vscode"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubBanner;
