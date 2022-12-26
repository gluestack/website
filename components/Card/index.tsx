import React from "react";
import Image from "next/image";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";
import Linktag from "../../elements/Linktag";

function Card({ src, altText, title, description, href, type }: any) {
  return (
    <div className="bg-white  border rounded-lg border-gray dark:bg-black-100 dark:border-black-200 relative ">
      {type == "hasIcon" ? (
        <div className=" ml-auto h-[54px] w-[54px] bg-primary-50 dark:bg-black-200 top-0 right-0 rounded-bl-lg rounded-tr-lg  flex justify-center items-center">
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
      <div className={`p-6 ${type == "hasIcon" ? "text-center pt-0" : ""}`}>
        <Heading priority={`${type == "hasIcon" ? "6" : "3"}`}>{title}</Heading>
        <div className="mt-4">
          <Text size="base">{description}</Text>
        </div>
      </div>
    </div>
  );
}

export default Card;
