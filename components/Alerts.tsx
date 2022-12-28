import React from "react";

function Alerts({ children, danger, warn,popup }: any) {
  return (
  <>
    <p
      className={`${
        danger ? "text-red-500" : warn ? "text-yellow-500" : "text-green-500"
      } ${popup ? "bg-white shadow-xl w-3/9 fixed top-5 right-10 text-center font-displaySemibold rounded-xl p-4" : ""} `}
    >
      {children}
    </p>
    {/* <hr className="h-2 bg-green-500 w-3/9 " /> */}
  </>
  );
}

export default Alerts;

