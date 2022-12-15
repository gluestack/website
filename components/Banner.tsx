import React from "react";
import Image from "next/image";

function Banner({ cover, altText, children }: any) {
  return (
    <div className="relative max-w-[1800px] m-auto">
      {/* <div className="absolute top-0 bottom-0 left-0 right-0">
        <Image src={cover} alt={altText} objectFit="contain" />
      </div> */}

      <div className="container mx-auto ">
        <section className="py-16">{children}</section>
      </div>
    </div>
  );
}

export default Banner;
