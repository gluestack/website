import React from "react";
import Details from "../../components/Details";
import DarkBg from "../../public/images/code.gif";
import Module from "../../public/images/module.gif";
import Gradient from "../../public/images/gradient-pink.png";
import CustomImage from "../../components/CustomImage";

import Image from "next/image";

function MordenStack() {
  return (
    <div className="relative w-full ">
         <div className="absolute top-16 right-0 -z-10">
        <Image src={Gradient} alt="image" objectFit="contain"  />
      </div>
    <div className="container lg:pt-32 pt-12 pb-12 relative">
        
      <div className="grid lg:grid-cols-5 lg:gap-40 grid-cols-1 gap-4 items-center">
        <div className="lg:w-[400px] w-full lg:col-span-2">
           <CustomImage  src={DarkBg}  alt="image" style="rounded-lg" />
        </div>
       
        <div className="lg:col-span-3">
        <Details
          title="Building beautiful apps with "
          last="modern stacks."
          description="Making the right tech choices pulling you away from solving the business problem? gluestack helps you solve most of the engineering challenges by recommending the cutting-edge tech. With the proven power of Next.js, Storybook, TypeScript, GraphQL, Hasura & Dapr, now focus on building the real solution."
          // link="/"
          // btnText="START LEARNING"
        />
        </div>
      </div>

      <div className="grid lg:grid-cols-5 lg:gap-40 grid-cols-1 gap-4  lg:pt-40 pt-20 items-center">
      <div className=" pr-0 col-span-3">

        <Details
          title="Simple. Modular. "
          last="Complete."
          description="gluestack balances the power of standardization and flexibility. Our language-independent core helps ‘glue’ together swappable modules. Choose from the list of recommended plugins or build your own. Install in a jiffy and get started in no-time. Don’t build things from scratch over and over again!"
          // link="/"
          // btnText="STARTER KITS"
        />
        </div>
        <div className="lg:w-[400px] w-full col-span-2">
        <CustomImage  src={Module}  alt="image" style="rounded-lg" />
        </div>

       
      </div>
    </div>
    </div>
  );
}

export default MordenStack;
