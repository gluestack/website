import React from "react";

function Tags({ isTag, children }: any) {
  return (
    <>
      <button
        className={`${
          isTag
            ? "px-8 py-2   text-black bg-gray-200 rounded-full text-md"
            : "inline-block px-4 py-2 text-black border rounded-lg text-md"
        }`}
      >
        {children}
      </button>
    </>
  );
}

export default Tags;
