import React from "react";

function Text({  size, isLight,children, primary, primaryLight,white,light,bold }: any) {
  return (
    <>
      <div
        className={`${light ? "font-displayLight" : bold ? "font-displayHead" : "font-display"} ${primary ? "text-primary" : primaryLight ? "text-primary-700" : white ? "text-white dark:text-white-100" : "text-black-200 dark:text-white-100"} tracking-wide		${
          size == "xxl"
            ? `lg:text-xxl text-lg`
            : size == "md"
            ? "lg:text-md text-sm"
            : size == "xl"
            ? "  text-xl "
            : size == "xs"
            ? "text-xs "
            : size == "sm"
            ? "text-sm "
            : size == "base"
            ? "text-base"
            : size == "lg"
            ? "md:text-lg text-md"
            : "text-base "
        }
      ${
        isLight ? "text-white" : `` ? `` : ``
      } `}
      >
        {children}
      </div>
    </>
  );
}

export default Text;

