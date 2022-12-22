import React from "react";
import LinkList from "./LinkList";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";

function More() {
  return (
    <div>
      <Heading priority="6" style="uppercase text-white pb-2">
        More
      </Heading>
      <ul>
        <LinkList link="/" style="py-2">
          <Text size="sm" white>
            Contact Sales
          </Text>
        </LinkList>
        <LinkList link="/" style="py-2">
          <Text size="sm" white>
            Github
          </Text>
        </LinkList>
      </ul>
    </div>
  );
}

export default More;
