import React, { Children } from "react";

function Text({ text, size, isLight, color, font, style,children }: any) {
  return (
    <>
      <p
        className={`${
          size == "xxl"
            ? `lg:text-xxl text-lg`
            : size == "md"
            ? "text-md"
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
        ${style}
      ${
        isLight ? "text-white" : `text-${color}` ? `font-${font}` : ``
      } `}
      >
        {children}
      </p>
    </>
  );
}

export default Text;

// md:text-xl
