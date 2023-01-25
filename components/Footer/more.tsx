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
        {/* <LinkList link="/" style="py-2">
          <Text size="sm" white>
            Contact Sales
          </Text>
        </LinkList> */}
        <LinkList link="https://github.com/gluestack" style="py-2 linkhover" target="_blank">
          <Text size="sm" white>
            Github
          </Text>
        </LinkList>
        <div className="linkhover">
        <Button  lookLink dataId="N4FpGGZE">
          <a>Report a bug</a>
        </Button>
        </div>
      </ul>
    </div>
  );
}

export default More;
