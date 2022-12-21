import React from "react";
import Image from "next/image";
import bannerIng from "../public/images/banner-new.png"

function Banner({ cover, altText, children,paddingBottom }: any) {
  return (
    <div className="relative max-w-[2200px] w-full m-auto">
      <div className="absolute -bottom-4 m-auto top-auto flex w-full -z-10 opacity-40">
        <Image src={bannerIng} alt={altText} objectFit="contain"  />
      </div> 
      <div className={`container text-center lg:text-left  ${paddingBottom ? '' : 'py-8'}`}>
        <section className="">{children}</section>
      </div>
    </div>
  );
}

export default Banner;
