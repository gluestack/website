import React from "react";
import LinkList from "./LinkList";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";

function Resources() {
  return (
    <div>
      <Heading priority="6" style="uppercase text-white pb-2">
        GENERAL RESOURCES
      </Heading>
      <ul>
        <LinkList link="/docs" style="py-2">
          <Text size="sm" style="text-white-200">
            Docs
          </Text>
        </LinkList>
        <LinkList link="/showcase" style="py-2">
          <Text size="sm" style="text-white-200">
            Showcase
          </Text>
        </LinkList>
        <LinkList link="/blog" style="py-2">
          <Text size="sm" style="text-white-200">
            Blog
          </Text>
        </LinkList>
      </ul>
    </div>
  );
}

export default Resources;
