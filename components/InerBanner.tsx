import React from "react";
import Banner from "./Banner";
import Heading from "../elements/Heading";
import Text from "../elements/Text";

function InerBanner({ title, description, last, style, paddingBottom, single }: any) {
  return (
    <div className="mt-8">
      <Banner paddingBottom={paddingBottom}>
        <Heading priority={1} style={`text-secondary ${style} `} single={single}>
          {" "}
          {title}
          <span className="text-primary">{last}</span>
        </Heading>
        {description && (
          <Text
            size="md"
            style="text-secondary font-displayLight py-6  w-full "
          >
            {description}
          </Text>
        )}
      </Banner>
    </div>
  );
}

export default InerBanner;
