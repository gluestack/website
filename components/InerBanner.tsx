import React from "react";
import Banner from "./Banner";
import Heading from "../elements/Heading";
import Text from "../elements/Text";

function InerBanner({ title, description, last, style, paddingBottom }: any) {
  return (
    <>
      <Banner paddingBottom={paddingBottom}>
        <Heading priority={1} style={`text-secondary ${style}`}>
          {" "}
          {title}
          <span className="text-primary">{last}</span>
        </Heading>
        {description && (
          <Text
            size="md"
            style="text-secondary font-displayLight text-center py-6 lg:w-8/12 w-full m-auto"
          >
            {description}
          </Text>
        )}
      </Banner>
    </>
  );
}

export default InerBanner;
