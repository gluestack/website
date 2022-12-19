import React from "react";

export const Content = (props: any) => {
  return (
    <div className="content-body text-black px-20 w-full p-4 pb-10 mb-10">
      <div className="max-w-none">{props.children}</div>
    </div>
  );
};
