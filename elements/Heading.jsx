import React from "react";

const Heading = ({ title, isLight, color, priority,children }) => {
  const DynamicTag = `h${priority}`;
  return (
    <div>
      <DynamicTag
        className={`${
          priority == 1
            ? "lg:text-6xl text-3xl "
            : priority == 2
            ? "lg:text-xxl text-md "
            : priority == 3
            ? "lg:text-2xl text-xl"
            : priority == 5
            ? "lg:text-xl text-lg"
            : priority == 6
            ? "text-base font-semibold "
            : "text-lg font-medium "
        }
      ${isLight ? "text-white" : `text-${color} `} font-bold `}
      >
        {title}
        {children}
      </DynamicTag>
    </div>
  );
};

export default Heading;
