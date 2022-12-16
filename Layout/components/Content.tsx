import React from "react";

export const Content = (props: any) => {
  return (
    <div className="text-black px-20 w-full h-[calc(100%_-_72px)]  p-4 overflow-auto">
      {props.children}
    </div>
  );
};
