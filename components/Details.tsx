import React from "react";
import Heading from "../elements/Heading";
import Text from "../elements/Text";
import Button from "./Button";
import InnerHeadding from "../elements/InnerHeading";

function Details({ title, last, description, btnText, link, first }: any) {
  return (
    <div className="text-left">
      <InnerHeadding priority={2} title={title} last={last} first={first} />
      <div className="py-4">
      <Text size="md" >
        {description}
      </Text>
      </div>
      {/* <div className="mt-4">
        <Button link={link}>{btnText}</Button>
      </div> */}
    </div>
  );
}

export default Details;
