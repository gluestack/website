import React from "react";
import Image from "next/image";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";
import Author from "../Author";
import Tags from "../Tags";
import { formatDate } from "../../Hooks/FormatDate";
import Linktag from "../../elements/Linktag";

function Card({
  src,
  altText,
  title,
  description,
  type,
  autherName,
  autherImage,
  publish_date,
  category,
  link,
}: any) {
  return (
    <div className="bg-white  border rounded-lg border-gray dark:bg-secondary dark:border-black-200 relative ">
      <Linktag href={link || ""}>
        <div
          className={`${type == "author" &&
            "grid items-center grid-cols-1 gap-6 lg:gap-16 md:grid-flow-col"}`}
        >
          {type == "hasIcon" ? (
            <div className=" absolute ml-auto h-[53px] w-[53px] bg-primary-50 dark:bg-black-200 top-0 right-0 rounded-bl-lg rounded-tr-lg  flex justify-center items-center">
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
            <div
              className={`relative  ${
                type == "author"
                  ? "order-2 w-50 lg:w-80 h-40 mr-6"
                  : "w-full h-[250px]"
              }`}
            >
              <Image
                src={src}
                alt={altText || "banner"}
                layout="fill"
                objectFit="cover"
                className={` ${
                  type == "author"
                    ? "rounded-lg"
                    : "rounded-tl-lg rounded-tr-lg"
                } `}
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

            <div className="mt-4">
              <Text size="base">{description}</Text>
            </div>
            {type == "author" && (
              <div className="flex flex-col items-start space-x-0 space-y-2 lg:items-center lg:space-x-1 lg:space-y-0 lg:flex-row pt-2">
                <Author
                  src={autherImage}
                  altText={altText || "profileImage"}
                  name={autherName}
                />

                <span className="hidden px-1 lg:block dark:text-gray">|</span>
                <Text size="sm">{formatDate(publish_date)}</Text>
                <div className="pl-0 lg:pl-4">
                  {category.map((data: any, index: any) => (
                    <Tags key={index}>{data.attributes.name}</Tags>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Linktag>
    </div>
  );
}

export default Card;
