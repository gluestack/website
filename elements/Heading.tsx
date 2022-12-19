import React from "react";

const Heading = ({ isLight, color, priority, children,style }: any) => {
  const DynamicTag: any = `h${priority}`;
  return (
    <div>
      <DynamicTag
        className={`${
          priority == 1
            ? "lg:text-6xl text-4xl leading-normal lg:leading-[98px] font-displayHead"
            : priority == 2
            ? "text-4xl md:text-5xl font-displaySemibold"
            : priority == 3
            ? " text-3xl font-displaySemibold"
            : priority == 4
            ? " text-lg"
            : priority == 5
            ? "lg:text-xl text-lg font-displaySemibold"
            : priority == 6
            ? "text-base font-displaySemibold "
            : "text-lg font-displaySemibold "
        }
        ${style}
      ${isLight ? "text-white" : `${color} `} `}
      >
        {children}
      </DynamicTag>
    </div>
  );
};

export default Heading;
