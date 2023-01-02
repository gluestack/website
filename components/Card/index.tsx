import React from "react";
import Image from "next/image";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";

function Card({ src, altText, title, description, type }: any) {
  return (
    <div className="bg-white  border rounded-lg border-gray dark:bg-secondary dark:border-black-200 relative ">
      {type == "hasIcon" ? (
        <div className=" absolute ml-auto h-[53px] w-[53px] bg-primary-50 dark:bg-black-200 top-0 right-0 rounded-bl-lg rounded-tr-lg  flex justify-center items-center">
          <div className="relative w-[30px] max-h-[30px]">
            <Image
              src={src}
              alt={altText}
              className=" dark:hidden block"
            />
            <Image
              src={src}
              alt={altText}
              className="filter-white dark:block hidden"
            />
          </div>
        </div>
      ) : (
        <div className="relative w-full h-[250px]">
          <Image
            src={src}
            alt={altText || "banner"}
            className="rounded-tl-lg rounded-tr-lg"
          />
        </div>
      )}
      <div className={`p-6 `}>
        {type == "hasIcon" ? (
          <Heading priority="3">
            {" "}
            <span className="  text-md leading-3">{title}</span>
          </Heading>
        ) : (
          <Heading priority="3"> {title}</Heading>
        )}

        {/* <Heading priority="3">
          {type == "hasIcon" ? (
            <span className=" lg:text-lg text-md leading-3">{title}</span>
          ) : (
            {title}
          )}
        </Heading> */}

        <div className="mt-4">
          <Text size="base">{description}</Text>
        </div>
      </div>
    </div>
  );
}

export default Card;
