import React from "react";
import Image from "next/image";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";

function Card({ src, altText, title, description, type }: any) {
  return (
    <div className="bg-white  border rounded-lg border-gray dark:bg-secondary dark:border-black-200 relative ">
      {type == "hasIcon" ? (
        <div className=" absolute ml-auto h-[54px] w-[54px] bg-primary-50 dark:bg-black-200 top-0 right-0 rounded-bl-lg rounded-tr-lg  flex justify-center items-center">
          <div className="relative h-[30px] w-[30px] ">
            <Image
              src={src}
              alt={altText}
              layout="fill"
              objectFit="contain "
              className=" dark:hidden block"
            />
            <Image
              src={src}
              alt={altText}
              layout="fill"
              objectFit="contain "
              className="filter-white dark:block hidden"
            />
          </div>
        </div>
      ) : (
        <div className="relative w-full h-[250px]">
          <Image
            src={src}
            alt={altText || "banner"}
            layout="fill"
            objectFit="cover"
            className="rounded-tl-lg rounded-tr-lg"
          />
        </div>
      )}
      <div className={`p-6 `}>
        <Heading priority="3">
          {type == "hasIcon" ? (
            <span className=" lg:text-lg text-md leading-3	">{title}</span>
          ) : (
            { title }
          )}
        </Heading>

        <div className="mt-4">
          <Text size="base">{description}</Text>
        </div>
      </div>
    </div>
  );
}

export default Card;
