import React, { useContext,useState,useEffect } from "react";
import Details from "../../components/Details";
import DarkBg from "../../public/images/animatedImgs/code_new.svg";
import Module from "../../public/images/animatedImgs/mode_light.svg";
import ModuleDark from "../../public/images/animatedImgs/mode_dark.svg";
import { AppContext } from "../../pages/_app";
import GradientLight from "../../public/images/gradient-pink.png";
import GradientDark from "../../public/images/gradientDark-pink.png";

import CustomImage from "../../components/CustomImage";

import Image from "next/image";

function MordenStack() {
    //@ts-ignore

  const { darkMode } = useContext(AppContext);
  const [isMounted, setIsMounted] = useState(false);
  const dark = darkMode?.value ?? "dark";
  const Gradient = () => {
    return (
      <>
        {!dark ? (
          <Image src={GradientLight} alt="Gradient" objectFit="contain" />
        ) : (
          <Image src={GradientDark} alt="Gradient" objectFit="contain" />
        )}
      </>
    );
  };

  const Moduler = () => {
    return (
      <>
        {!dark ? (
          <CustomImage src={Module} alt="Module" style="rounded-lg -z-20" />
        ) : (
          <CustomImage src={ModuleDark} alt="Module" style="rounded-lg " />
        )}
      </>
    );
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-full ">
      <div className="absolute top-16 right-0 ">
        {!isMounted ? <Gradient /> : <Gradient />}
      </div>
      <div className="container lg:pt-32 pt-12 pb-12 relative">
        <div className="grid lg:grid-cols-2 lg:gap-32 grid-cols-1 gap-4 items-center">
          <div className="lg:order-1 order-2">
            <CustomImage src={DarkBg} alt="Apps" style="rounded-lg " />
          </div>

          <div className="lg:order-2 order-1">
            <Details
              title="Building beautiful apps with "
              last="modern stacks."
              description="Making the right tech choices pulling you away from solving the business problem? gluestack helps you solve most of the engineering challenges by recommending the cutting-edge tech. With the proven power of Next.js, Storybook, TypeScript, GraphQL, Hasura & Dapr, now focus on building the real solution."
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
            {!isMounted ? <Moduler /> : <Moduler />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MordenStack;
