import React from "react";

function Alerts({ children, danger, warn }: any) {
  return (
    <p
      className={`${
        danger ? "text-red-500" : warn ? "text-yellow-500" : "text-green-500"
      } `}
    >
      {children}
    </p>
  );
}

export default Alerts;
