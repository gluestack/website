import React, { Children } from "react";
import Text from './Text';

function Description({ children,size,isLight }: any) {
  return (
    <div className="py-6">
        <Text size={size} white>{children}</Text>
      </div>



    
  );
}

export default Description;

