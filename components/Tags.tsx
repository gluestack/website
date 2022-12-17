import React, { Children } from "react";

function Tags({ isTag, children }: any) {
  return (
    <>
      {isTag ? (
        <button className="px-8 py-3 mb-1 mr-1 font-bold text-black bg-gray-200 rounded-full text-md ">
          {children}
        </button>
      ) : (
        <li className="p-2">
          <a
            href="#"
            className="inline-block px-4 py-3 text-black border rounded-lg text-md"
          >
            {children}
          </a>
        </li>
      )}
    </>
  );
}

export default Tags;
