import React from "react";
import LinkList from "./LinkList";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";
import Button from "../Button";

function More() {
  return (
    <div>
      <div className="pb-2">
        <Heading priority="6">
          <span className="uppercase text-white">More</span>
        </Heading>
      </div>
      
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
        <Button  lookLink dataId="N4FpGGZE">
          Report a bug
        </Button>
      </ul>
    </div>
  );
}

export default More;
