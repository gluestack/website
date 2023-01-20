import React from "react";

const Heading = ({ priority, dark, children, single }: any) => {
  const DynamicTag: any = `h${priority}`;
  return (
      <DynamicTag
        className={` font-displayHead  ${
          priority == 1
            ? `${single ? "lg:text-5xl text-4xl " : "lg:text-6xl text-4xl "}`
            : priority == 2
            ? "lg:text-5xl text-4xl "
            : priority == 3
            ? "lg:text-3xl text-2xl "
            : priority == 4
            ? "lg:text-xxl text-xl "
            : priority == 5
            ? "lg:text-xl text-lg "
            : priority == 6
            ? "lg:text-medium text-medium "
            : "text-lg  "
        }
       
      ${
        dark ? "text-white dark:text-white" : `text-secondary dark:text-white-200`
      } `}
      >
        {children}
      </DynamicTag>
  );
};

export default Heading;
