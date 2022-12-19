import Image from "next/image";
import Text from "../../elements/Text";
import Linktag from "../../elements/Linktag";
import LinkList from "./LinkList";
import Resources from "./resources";

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
    <div className="bg-black-100">
      <div className="container py-12">
        <Logo dark />

        <div className="grid grid-cols-6 gap-6 pt-4">
          <div className="col-span-2">
            <div className="pb-4">
              <Text size="md" style="font-displayLight text-white-200">
                An extensible full-stack framework that takes away the
                complexities of building modern web & mobile apps.
              </Text>
            </div>
            <div>
              <Social />
            </div>
            <div className="mt-6">
              <Text style="text-gray-100 font-displayLight " size="base">
                2023 © All rights reserved. gluestack Inc
              </Text>
            </div>
          </div>
          <div>
            <Resources />

          </div>
        </div>
      </div>
    </div>
  );
};
