import React from "react";
import Details from "../../components/Details";
import DarkBg from "../../public/images/code.png";
import Module from "../../public/images/module.png";
import Gradient from "../../public/images/gradient-pink.png"

import Image from "next/image";

function MordenStack() {
  return (
    <div className="relative w-full">
         <div className="absolute top-16 right-0 -z-10">
        <Image src={Gradient} alt="image" objectFit="contain"  />
      </div>
    <div className="container pt-32 pb-12 relative">
        
      <div className="grid lg:grid-cols-2 lg:gap-40 grid-cols-1 gap-4 items-center">
        <div className="relative ">
          <Image
            src={DarkBg}
            width={592}
            height={342}
            className="rounded-lg"
            objectFit="contain"
            alt="image"
          />
        </div>
        <div className="lg:pl-12 pl-0">
        <Details
          title="Building beautiful apps with "
          last="modern stacks."
          description="Making the right tech choices pulling you away from solving the business problem? gluestack helps you solve most of the engineering challenges by recommending the cutting-edge tech. With the proven power of Next.js, Storybook, TypeScript, GraphQL, Hasura & Dapr, now focus on building the real solution."
          link="/"
          btnText="START LEARNING"
        />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-40 grid-cols-1 gap-4  pt-40 items-center">
      <div className="lg:pr-12 pr-0">

        <Details
          title="Simple. Modular. "
          last="Complete."
          description="gluestack balances the power of standardization and flexibility . Our language-independent core helps ‘glue’ together swappable modules. Choose from the list of recommended plugins or build your own. Install in a jiffy and get started in no-time. Don’t build things from scratch over and over again!"
          link="/"
          btnText="STARTER KITS"
        />
        </div>
        <div className="relative">
          <Image
            src={Module}
            className="rounded-lg"
            objectFit="contain"
            alt="image"
            width={722}
            height={524}
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default MordenStack;
