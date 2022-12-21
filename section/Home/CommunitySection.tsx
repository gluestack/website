import React from "react";
import Image from "next/image";
import Details from "../../components/Details";
import Gradient from "../../public/images/gradient-pink.png";


function CommunitySection() {
  return (
    <div className="relative w-full">
        <div className="absolute top-16 right-0 -z-10">
            <Image src={Gradient} alt="image" objectFit="contain"  />
        </div>
        <div className="container pt-32 pb-12 relative">
        
            <div className="grid lg:gap-40 grid-cols-1 gap-4 items-center">
            
                    <div className="lg:pl-12 pl-0 text-center">
                    <Details
                        title="A community built for "
                        last="people like you."
                        description="Become a part of the gluestack community to receive support, showcase your work, and contribute. Let’s share, learn and build together."
                    />
                    </div>
            </div>

       
        </div>
    </div>
  );
}

export default CommunitySection;
