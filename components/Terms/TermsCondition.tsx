import React, { Children } from 'react'
import Heading from '../../elements/Heading'
import Text from "../../elements/Text";

function TermsCondition({title,children}:any) {
  return (
    <div className="container mx-auto text-justify py-14">
    <Heading priority={3}>{title}</Heading>
     <div className='pt-2'>
     <Text size="md" style="font-normal">
       {children}
      </Text>
     </div>
      </div>
  )
}

export default TermsCondition