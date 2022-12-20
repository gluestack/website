import React from "react";
import LinkList from "./LinkList";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";

function EcoSystem() {
  return (
    <div>
      <Heading priority="6" style="uppercase text-white pb-2">
      EcoSystem
      </Heading>
      <ul>
        <LinkList src="/" style="py-2">
          <Text size="sm" style="text-white-200">
            Seal
          </Text>
        </LinkList>
        <LinkList src="/showcase" style="py-2">
          <Text size="sm" style="text-white-200 ">
            <span className="relative">
            Design System
            <div className="absolute rounded bg-secondary-400 px-1 py-1 text-[8px] -right-[55px] -top-2">
              Upcoming

            </div>
            </span>

          </Text>
        </LinkList>
       
      </ul>
    </div>
  );
}

export default EcoSystem;
