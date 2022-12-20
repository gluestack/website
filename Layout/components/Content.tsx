import React from "react";

export const Content = (props: any) => {
  return (
    <div className="content-body text-black w-full flex-1">
      <div className="py-12 pl-20 max-w-none">{props.children}</div>
    </div>
  );
};
