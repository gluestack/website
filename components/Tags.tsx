import React from "react";

function Tags({ solid,outline, fontbold, children }: any) {
  return (
    <>
      <button
        className={`${
          solid
            ? "px-8 py-2   text-black bg-gray-200 rounded-full text-md"
            : outline
            ? "inline-block px-4 py-2 text-black border rounded-lg text-md"
            : ` text-primary ${fontbold ? "font-displaySemibold " : "" } p-1`
        }`}
      >
        {children}
      </button>
    </>
  );
}

export default Tags;
