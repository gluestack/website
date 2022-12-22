import React from "react";
import Gradient from "../../public/images/gradient-pink.png";
import InnerHeadding from "../../elements/InnerHeading";

import Image from "next/image";

function PeopleSection() {
  return (
    <div className="gradient-dark relative w-full">
      <div className="absolute bottom-0 right-0 -z-10">
        <Image src={Gradient} alt="image" objectFit="contain" />
      </div>
      <div className="container py-32 relative">
        <div className="text-center ">
        <InnerHeadding  title="A community built for "  last="people like you." priority="2" />
        </div>

      
        <div className="pt-32">
          <div className="grid lg:grid-cols-2 lg:gap-40 grid-cols-1 gap-4 items-center">
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleSection;
