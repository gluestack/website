import React from "react";
import Image from "next/image";
import logodark from "/public/images/logo/darkLogo.svg";
import line from "/public/images/line.png";
import CustomImage from "../../components/CustomImage";
import Text from "../../elements/Text";

function SignupFooter() {
  return (
    <div className="relative w-full bg-black py-16 ">
        <div className="container items-center justify-center flex flex-col flex-1">
          <div className="lg:w-[300px] w-[200px]  text-center">
                <CustomImage src={logodark} alt="image" />
            </div>
            <div className="flex flex-row items-center mt-2">
            <div className="lg:w-[100px]  w-[70px] text-center">
                <CustomImage src={line} alt="image" />
                </div>
                <Text style="text-white ml-2 lg:text-sm text-xs" >Now build scalable full-stack apps faster</Text>
            </div>
        </div>
    </div>
  );
}

export default SignupFooter;
