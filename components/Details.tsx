import React from "react";
import Heading from "../elements/Heading";
import Text from "../elements/Text";
import Button from "./Button";

function Details({ title, last, description, btnText, link }: any) {
  return (
    <div >
      <Heading priority={2}>
        {title} <span className="text-primary">{last}</span>
      </Heading>

      <Text size="md" style="py-4">
        {description}
      </Text>
      <div className="mt-4">
        <Button link={link}>{btnText}</Button>
      </div>
    </div>
  );
}

export default Details;
