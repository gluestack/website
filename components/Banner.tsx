import React from "react";
import Image from "next/image";
import bannerIng from "../public/images/banner-new.png"

function Banner({ cover, altText, children,paddingBottom }: any) {
  return (
    <div className="relative max-w-[2200px] w-full m-auto">
      <div className="absolute top-0 bottom-0  m-auto flex items-center justify-center w-full -z-10">
        <Image src={bannerIng} alt={altText} objectFit="contain"  />
      </div> 
      <div className={`container  lg:pt-16   ${paddingBottom ? '' : 'lg:pb-16 py-8'}`}>
        <section className="">{children}</section>
      </div>
    </div>
  );
}

export default Banner;
