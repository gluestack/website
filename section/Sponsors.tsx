import Image from "next/image";
import React from "react";
import newyork from "../public/images/the-new-york-times.png";
import img2 from "../public/images/disney.png";
import img3 from "../public/images/st-jude.png";
import img4 from "../public/images/twitch.png";
import img5 from "../public/images/wwe.png";
import img6 from "../public/images/warner-bros.png";

function Sponsors() {
  return (
    <>
      <div className="container mx-auto py-28">
        <div className="flex justify-center gap-x-10 ">
          <div className="">
            <Image
              src={newyork}
              alt="The New York Times"
              width={250}
              height={50}
            />
          </div>
          <div className="">
            <Image
              src={newyork}
              alt="The New York Times"
              width={250}
              height={50}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsors;
