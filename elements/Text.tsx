import React from "react";

function Text({  size,children, primary, primaryLight,white,light,bold, offwhite }: any) {
  return (
    <>
      <div
        className={`${light ? "font-light" : bold ? "font-display font-bold" : "font-display"} ${primary ? "text-primary" : primaryLight ? "text-primary" : white ? "text-gray dark:text-gray" : offwhite ? "text-gray-50 dark:text-gray-50" : "text-black-200 dark:text-gray"} tracking-wide		${
          size == "xxl"
            ? `text-xxl`
            : size == "md"
            ? "text-md "
            : size == "xl"
            ? "text-xl"
            : size == "xs"
            ? "text-xs "
            : size == "sm"
            ? "text-sm "
            : size == "base"
            ? "text-base"
            : size == "lg"
            ? "text-lg"
            : "text-base "
        }
       `}
      >
        {children}
      </div>
    </>
  );
}

export default Text;

