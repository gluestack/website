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
          <Text size="sm" style="text-white-200">
            Design System
          </Text>
        </LinkList>
       
      </ul>
    </div>
  );
}

export default EcoSystem;
