import React from "react";
import Image from "next/image";
import bannerIng from "../public/images/banner-new.png"
import { isBrowser } from 'react-device-detect';

function Banner({   children,paddingBottom }: any) {
  return (
    <div className="relative max-w-[2200px] w-full m-auto">
                {isBrowser && (

        <Image src={bannerIng} alt="Banner" objectFit="contain"  className="absolute -bottom-4 m-auto top-auto flex w-full -z-10 opacity-40" />
                )}
      <div className={`container text-center lg:text-left  ${paddingBottom ? '' : 'py-8'}`}>
        <section className="">{children}</section>
      </div>
    </div>
  );
}

export default Banner;
