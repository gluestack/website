import React, { Children } from "react";

function Text({ text, size, isLight, color, font, style,children }: any) {
  return (
    <>
      <p
        className={`${
          size == "xs"
            ? `lg:text-xl text-xl`
            : size == "md"
            ? "text-md"
            : size == "xl"
            ? "  text-xxl "
            : size == "xs"
            ? "text-xs "
            : size == "sm"
            ? "text-sm "
            : size == "base"
            ? "text-base"
            : size == "lg"
            ? "md:text-lg text-sm"
            : "text-base "
        }
        ${style}
      ${
        isLight ? "text-white" : `text-${color}` ? `font-${font}` : ``
      } `}
      >
        {text}
        {children}
      </p>
    </>
  );
}

export default Text;

// md:text-xl