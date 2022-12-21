import React from "react";
import Image from "next/image";
import logodark from "/public/images/logo/darkLogo.svg";
import line from "/public/images/line.png";
import CustomImage from "../../components/CustomImage";

function SignupFooter() {
  return (
    <div className="relative w-full bg-black py-16 ">
        <div className="container items-center justify-center flex flex-col flex-1">
=            <div className="w-[300px] h-[150px] text-center">
                <CustomImage src={logodark} alt="image" />
            </div>
            <div className="flex flex-row">
                <CustomImage src={line} alt="image" />
                <p className="text-white">Now build scalable full-stack apps faster</p>
            </div>
        </div>
    </div>
  );
}

export default SignupFooter;
