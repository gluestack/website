import React from "react";

export const Content = (props: any) => {
  return (
    <div className="content-body text-black w-full flex-1 h-full">
      <div className="md:pl-20 py-12 max-w-none h-full">{props.children}</div>
    </div>
  );
};
