import React, { Children } from 'react'
import Heading from '../../elements/Heading'
import Text from "../../elements/Text";

function TermsCondition({title,children}:any) {
  return (
    <div className="container py-14">
    <Heading priority={4} style="text-md font-displaySemibold">{title}</Heading>
    <div className="container pb-14">
     <Text size="md" style="font-normal text-justify">
       {children}
      </Text>
     </div>
      </div>
  )
}

export default TermsCondition