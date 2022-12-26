import React, { Children } from 'react'
import Heading from '../../elements/Heading'
import Text from "../../elements/Text";

function TermsCondition({title,children}:any) {
  return (
    <div className="container py-14">
    <Heading priority={4}>{title}</Heading>
    <div className="container pb-14">
     <Text size="md" >
       {children}
      </Text>
     </div>
      </div>
  )
}

export default TermsCondition