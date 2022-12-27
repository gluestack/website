import React from "react";
import Heading from "../elements/Heading";

function InnerHeadding({ title, last, first, priority }: any) {
  return (
      <Heading priority={priority}>
        {first && <span className="text-primary-200 dark:text-primary-100">{first}</span>} {title} {last && <span className="text-primary-200  dark:text-primary-100">{last}</span>}
      </Heading>

     
  );
}

export default InnerHeadding;
