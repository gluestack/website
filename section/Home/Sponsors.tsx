import Image from "next/image";
import React from "react";
import img2 from "/public/images/disney.png";
import img3 from "/public/images/st-jude.png";
import img4 from "/public/images/twitch.png";

function Sponsors() {
  return (
    <>
      <div className="container hidden mx-auto lg:block py-28">
        <div className="flex justify-center gap-x-10 ">
          <div className="">
            <Image
              src={img2}
              alt="The New York Times"
              width={180}
              height={50}
            />
          </div>
          <div className="">
            <Image
              src={img3}
              alt="The New York Times"
              width={180}
              height={50}
            />
          </div>
          <div className="">
            <Image
              src={img4}
              alt="The New York Times"
              width={180}
              height={50}
            />
          </div>
          <div className="">
            <Image
              src={img2}
              alt="The New York Times"
              width={180}
              height={50}
            />
          </div>
          <div className="">
            <Image
              src={img3}
              alt="The New York Times"
              width={180}
              height={50}
            />
          </div>
          <div className="">
            <Image
              src={img4}
              alt="The New York Times"
              width={180}
              height={50}
            />
          </div>
          <div className="">
            <Image
              src={img3}
              alt="The New York Times"
              width={180}
              height={50}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsors;
