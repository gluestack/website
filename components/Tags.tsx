import React from "react";

function Tags({ children }: any) {
  return (
    <>
      <span className="tagsButton">
        {children}
      </span>
    </>
  );
}

export default Tags;
