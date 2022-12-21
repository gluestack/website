import React from "react";
import Heading from "../elements/Heading";

function InnerHeadding({ title, last, first, priority }: any) {
  return (
      <Heading priority={priority}>
        {first && <span className="text-primary">{first}</span>} {title} {last && <span className="text-primary">{last}</span>}
      </Heading>

     
  );
}

export default InnerHeadding;
