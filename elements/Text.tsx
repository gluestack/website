import React, { Children } from "react";

function Text({ text, size, isLight, color, font, style,children }: any) {
  return (
    <>
      <p
        className={`${
          size == "xs"
            ? `lg:text-xl text-xl`
            : size == "vsm"
            ? "md:text-vsm text-xs"
            : size == "2xs"
            ? "  text-xl "
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
