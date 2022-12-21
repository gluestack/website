import React from "react";

function Tags({ solid,outline, fontbold, children }: any) {
  return (
    <>
      <button
        className={`font-display ${
          solid
            ? "px-4 py-2 text-black bg-gray-200 rounded-full  dark:text-black-300 text-sm "
            : outline
            ? "inline-block px-4 py-2 text-black border rounded-lg  dark:text-white text-sm "
            : ` text-primary ${fontbold ? "font-displaySemibold " : "" } p-1 text-md`
        }`}
      >
        {children}
      </button>
    </>
  );
}

export default Tags;
