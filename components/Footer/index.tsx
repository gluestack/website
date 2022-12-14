import Text from "../../elements/Text";
import Resources from "./resources";
import EcoSystem from "./ecosystem";
import More from "./more";
import Legal from "./legal";

import Logo from "../Header/Logo";
import Social from "./Social";

export const Footer = () => {
  const data = [
    {
      id: 1,
      title: "Our Team",
      link: "/ournote",
    },
    {
      id: 2,
      title: "Notes",
      link: "notes",
    },
  ];
  return (
    <div className="bg-secondary">
      <div className="container py-12">
        <Logo darkLogo />

        <div className="grid lg:grid-cols-6  grid-cols-1 lg:gap-12 gap-4 pt-2">
          <div className="lg:col-span-2 col-span-1">
            <div className="py-4">
              <Text size="md" >
                An extensible full-stack framework that takes away the
                complexities of building modern web & mobile apps.
              </Text>
            </div>
            <div className="lg:block hidden">
              <Social />
            </div>
            <div className="mt-6 lg:block hidden">
              <Text  size="base">
                2023 © All rights reserved. gluestack Inc
              </Text>
            </div>
          </div>
          <div>
            <Resources />
          </div>
          <div>
            <EcoSystem />
          </div>
          <div>
            <More />
          </div>
          <div>
            <Legal />
          </div>
          <div className="lg:hidden block">
              <Social />
            </div>
            <div className=" lg:hidden block">
              <Text  size="base">
                <span className="text-gray-100 font-displayLigh">
                2023 © All rights reserved. gluestack Inc</span>
              </Text>
            </div>
        </div>
      </div>
    </div>
  );
};
