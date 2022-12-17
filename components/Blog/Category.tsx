import React from 'react'

function Category({category}:any) {
  return (
    <>
        <li className="p-2">
            <a
              href="#"
              className="inline-block px-4 py-3 text-black border rounded-lg"
            >
              {category}
            </a>
          </li> 
    </>
  )
}

export default Category