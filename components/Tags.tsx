import React from "react";

function Tags({ children }: any) {
  return (
    <>
      <button className="tagsButton">
        {children}
      </button>
    </>
  );
}

export default Tags;
