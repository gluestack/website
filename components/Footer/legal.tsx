import React from "react";
import LinkList from "./LinkList";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";

function Legal() {
  return (
    <div>
      <Heading priority="6" style="uppercase text-white pb-2">
      Legal
      </Heading>
      <ul>
        <LinkList link="/cookie-policy" style="py-2">
          <Text size="sm" white>
          Cookie Policy
          </Text>
        </LinkList>
        <LinkList link="/privacy-policy" style="py-2">
          <Text size="sm" white>
          Privacy Policy
          </Text>
        </LinkList>
        <LinkList link="/terms" style="py-2">
          <Text size="sm" white>
          Terms of Service
          </Text>
        </LinkList>
      </ul>
    </div>
  );
}

export default Legal;
