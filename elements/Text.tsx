import React from "react";

function Text({  size, isLight, color, font, style,children }: any) {
  return (
    <>
      <div
        className={`font-display ${
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
      </div>
    </>
  );
}

export default Text;

