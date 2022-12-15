


import Image from "next/image";
import React from "react";
import Heading from "../elements/Heading";
import Text from "../elements/Text";

function List({ src, title,children}: any) {
  return (
    <div>
    <Image src={src} alt={"Database"} className="filter-primary" />
    <div className="py-4">
      <Heading
        isLight={undefined}
        color={undefined}
        priority={3}
      >
        {title}
      </Heading>
    </div>
    <div className="mt-4 ">
      <Text color="gray-700" size="sm">
        {children}
     </Text>
    </div>
    </div>
    
  );
}

export default List;
