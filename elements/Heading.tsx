import React from "react";

const Heading = ({ isLight, color, priority, children,style, single }: any) => {
  const DynamicTag: any = `h${priority}`;
  return (
    <div>
      <DynamicTag
        className={`tracking-wide	${
          priority == 1
            ? `${single ? "lg:text-5xl text-4xl leading-normal font-displayHead test"  : "lg:text-6xl text-4xl leading-normal font-displayHead"}`
            : priority == 2
            ? "lg:text-5xl text-4xl font-displayHead text-secondary dark:text-white leading-normal"
            : priority == 3
            ? "lg:text-3xl text-2xl font-displaySemibold"
            : priority == 4
            ? " text-lg"
            : priority == 5
            ? "lg:text-xl text-lg font-displaySemibold"
            : priority == 6
            ? "text-base font-displaySemibold "
            : "text-lg font-displaySemibold "
        }
        ${style}
      ${isLight ? "text-white dark:text-black-100" : `text-black-100 dark:text-white`} `}
      >
        {children}
      </DynamicTag>
    </div>
  );
};

export default Heading;
