import React from "react";

const Heading = ({
  isLight,
  color,
  priority,
  children,
  style,
  single,
}: any) => {
  const DynamicTag: any = `h${priority}`;
  return (
    <div>
      <DynamicTag
        className={`tracking-wide	leading-tight font-displayHead  ${
          priority == 1
            ? `${single ? "lg:text-5xl text-4xl  " : "lg:text-6xl text-4xl  "}`
            : priority == 2
            ? "lg:text-5xl text-4xl  text-secondary dark:text-white "
            : priority == 3
            ? "lg:text-3xl text-2xl "
            : priority == 4
            ? " lg:text-xxl text-xl"
            : priority == 5
            ? "lg:text-xl text-lg  text-secondary dark:text-white "
            : priority == 6
            ? "lg:text-lg text-md  text-secondary dark:text-white  "
            : "text-lg  "
        }
        ${style}
      ${
        isLight
          ? "text-white dark:text-black-100"
          : `text-black-100 dark:text-white`
      } `}
      >
        {children}
      </DynamicTag>
    </div>
  );
};

export default Heading;
