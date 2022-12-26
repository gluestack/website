import React from "react";
import LinkList from "./LinkList";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";

function EcoSystem() {
  return (
    <div>
      <div className="pb-2">
        <Heading priority="6">
          <span className="uppercase text-white">EcoSystem</span>
        </Heading>
      </div>
      <ul>
        <LinkList src="/" style="py-2">
          <Text size="sm" white>
            Seal
          </Text>
        </LinkList>
        <LinkList src="/showcase" style="py-2">
          <Text size="sm" white>
            <span className="relative">
            Design System
            <div className="absolute rounded bg-black-200 px-1 py-1 text-[8px] -right-[55px] -top-2">
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
