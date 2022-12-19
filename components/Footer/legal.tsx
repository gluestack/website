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
          <Text size="sm" style="text-white-200">
          Cookie Policy
          </Text>
        </LinkList>
        <LinkList link="/" style="py-2">
          <Text size="sm" style="text-white-200">
          Privacy Policy
          </Text>
        </LinkList>
        <LinkList link="/terms" style="py-2">
          <Text size="sm" style="text-white-200">
          Terms of Service
          </Text>
        </LinkList>
      </ul>
    </div>
  );
}

export default Legal;
