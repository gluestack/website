import React from "react";

export const Content = (props: any) => {
  return (
    <div className="text-black px-20 w-full  p-4 pr-60">
      {props.children}
    </div>
  );
};
