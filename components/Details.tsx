import React from "react";
import Heading from "../elements/Heading";
import Text from "../elements/Text";
import Button from "./Button";
import InnerHeadding from "../elements/InnerHeading";

function Details({ title, last, description, btnText, link, first }: any) {
  return (
    <div>
      <InnerHeadding priority={2} title={title} last={last} first={first} />
      <Text size="md" style="py-4">
        {description}
      </Text>
      {/* <div className="mt-4">
        <Button link={link}>{btnText}</Button>
      </div> */}
    </div>
  );
}

export default Details;
