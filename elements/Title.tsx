import React from "react";
import Heading from "./Heading";

function Title({ children }: any) {
  return (
    <Heading  priority={2}>
        {children}
        </Heading>


    
  );
}

export default Title;

