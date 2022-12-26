import React from 'react'
import Text from '../elements/Text'

function Disclaimer({first,last}:any) {
  return (
    <div className='container fixed inset-x-0 top-[61px] lg:top-[90px] z-10  bg-white border-2 border-gray dark:bg-black-200'>
        <Text size='sm'><span className='font-displaySemibold'>{first}</span> {last}</Text>
    </div>
  )
}

export default Disclaimer