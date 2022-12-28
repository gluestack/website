import React from 'react'
import Text from '../elements/Text'

function Disclaimer({title}:any) {
  return (
    <div className="bg-purple-100 dark:bg-secondary mt-2 py-4 relative z-10">
    <div className="container text-center">
      <Text size="md" primaryLight>
       {title}
      </Text>
    </div>
  </div>
  
  )
}

export default Disclaimer