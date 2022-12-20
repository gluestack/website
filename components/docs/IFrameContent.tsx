import React from "react";

export const IFrameContent = (props: any) => {
  return (
    <div className="text-black w-full flex-1">
      <div className="max-w-none h-full">{props.children}</div>
    </div>
  );
};
