import React from "react";
import Image from "next/image";
import vscode from "../public/images/vscode.png";
import Heading from "../elements/Heading";
import Text from "../elements/Text";
import Button from "./Button";
import Description from "../elements/Description";

function SubBanner({ heading, desc, src, btntext, isright }: any) {
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
