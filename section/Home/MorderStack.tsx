import React from "react";
import Details from "../../components/Details";
import DarkBg from "../../public/images/code_new.gif";
import Module from "../../public/images/mode_light.gif";
import ModuleDark from "../../public/images/mode_dark.gif";

import Gradient from "../../public/images/gradient-pink.png";
import GradientDark from "../../public/images/gradientDark-pink.png";

import CustomImage from "../../components/CustomImage";

import Image from "next/image";

function MordenStack() {
  return (
    <div className="relative w-full ">
         <div className="absolute top-16 right-0 ">
        <Image src={Gradient} alt="image" objectFit="contain"  className="dark:hidden block" />
        <Image src={GradientDark} alt="image" objectFit="contain"  className="dark:block hidden" />

      </div>
    <div className="container lg:pt-32 pt-12 pb-12 relative">
        
      <div className="grid lg:grid-cols-2 lg:gap-32 grid-cols-1 gap-4 items-center">
        <div className="lg:order-1 order-2">
           <CustomImage  src={DarkBg}  alt="image" style="rounded-lg "  />
           </div>
       
        <div className="lg:order-2 order-1">
        <Details
          title="Building beautiful apps with "
          last="modern stacks."
          description="Making the right tech choices pulling you away from solving the business problem? gluestack helps you solve most of the engineering challenges by recommending the cutting-edge tech. With the proven power of Next.js, Storybook, TypeScript, GraphQL, Hasura & Dapr, now focus on building the real solution."
          // link="/"
          // btnText="START LEARNING"
        />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-32 grid-cols-1 gap-4  lg:pt-40 pt-20 items-center">

        <Details
          title="Simple. Modular. "
          last="Complete."
          description="gluestack balances the power of standardization and flexibility. Our language-independent core helps ‘glue’ together swappable modules. Choose from the list of recommended plugins or build your own. Install in a jiffy and get started in no-time. Don’t build things from scratch over and over again!"
         
        />
        <div className="lg:w-[546px] w-full">
        <CustomImage  src={Module}  alt="image" style="rounded-lg dark:hidden block -z-20" />
        <CustomImage  src={ModuleDark}  alt="image" style="rounded-lg dark:block hidden" />
        </div>


       
      </div>
    </div>
    </div>
  );
}

export default MordenStack;
