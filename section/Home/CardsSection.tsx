import React from "react";
import bannerIng from "../../public/images/banner-new.png"
import CustomImage from "../../components/CustomImage";
import CardImg from "../../public/images/cardImg.png";

import Image from "next/image";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";

function CardsSection() {
  return (
    <div className="relative w-full pt-40 pb-80">
         {/* <div className="absolute top-16 right-0 -z-10">
            <Image src={bannerIng} alt="image" objectFit="contain"  />
        </div> */}
        <div className="bg-primary pt-10 max-h-[560px]">
          <div className="container pt-10 pb-12 relative ">
            <div className="sm:max-w-[620px] m-auto">
                <Heading priority={3} style="text-white text-center mb-10">
                    Adopting the best, but with no lock-in.
                </Heading>
                <Text  style="text-white text-center font-display">
                        gluestack makes app development faster by recommending the best stacks (yes, these are our opinions) while being configurable enough to add custom plugins to solve specific use-cases.
                </Text>
            </div>
            <div className="grid bg-white shadow-md py-5 px-20 mt-10 rounded-md">
                <CustomImage  src={CardImg}  alt="image"  />
            </div> 
          </div>
        </div>
    </div>
  );
}

export default CardsSection;
