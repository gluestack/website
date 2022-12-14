import React from "react";
import Heading from "../../elements/Heading";
import Linktag from "../../elements/Linktag";
import Text from "../../elements/Text";
function HeroSection() {
  return (
    <>
      <div className="container py-6 mx-auto">
        {/* <Linktag href='/' style=''>
        <span className="flex items-center pb-8 cursor-pointer">
          <span className="mt-1.5 ml-2 shrink-0 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 mb-1 transition-transform rotate-90`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </span>
          <Text>Back to Home</Text>
        </span>
        </Linktag> */}
        <Heading priority={1}>Terms and Conditions</Heading>
      </div>
    </>
  );
}

export default HeroSection;
