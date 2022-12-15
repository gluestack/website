import React from "react";

const Heading = ({ isLight, color, priority, children }: any) => {
  const DynamicTag: any = `h${priority}`;
  return (
    <div>
      <DynamicTag
        className={`${
          priority == 1
            ? "lg:text-6xl text-4xl leading-normal lg:leading-[98px]"
            : priority == 2
            ? "text-4xl md:text-5xl "
            : priority == 3
            ? " text-3xl"
            : priority == 4
            ? " text-lg"
            : priority == 5
            ? "lg:text-xl text-lg"
            : priority == 6
            ? "text-base font-light "
            : "text-lg font-medium "
        }
      ${isLight ? "text-white" : `text-${color} `} font-bold `}
      >
        {children}
      </DynamicTag>
    </div>
  );
};

export default Heading;
