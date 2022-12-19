import React from "react";
import LinkList from "./LinkList";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";

function Resources() {
  return (
    <div>
        <Heading priority="6" style="uppercase text-white pb-4">GENERAL RESOURCES</Heading>
        <ul>
      <LinkList src="/docs" style="pb-2">
        <Text size="sm" style="text-white-200">Docs</Text>
      </LinkList>
      <LinkList src="/showcase">
        <Text size="sm" style="text-white-200">Showcase</Text>
      </LinkList>
      </ul>
     
    </div>
  );
}

export default Resources;
