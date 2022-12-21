import React from "react";
import Image from "next/image";
import Button from "../Button";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";
import Linktag from "../../elements/Linktag";
import Tags from "../Tags";
import { formatDate } from "../../Hooks/FormatDate";
import Author from "../Author";

function Blog({
  title,
  shortDes,
  coverImg,
  publish_date,
  autherName,
  blogTag,
  category,
  autherImage,
  altText,
  slug,
}: any) {
  console.log(autherImage,"car");
  
  return (
    <>
      <article className="p-6 border border-gray rounded-lg bg-white dark:bg-black-200">
        <div className="grid grid-cols-1 lg:gap-16 gap-6 md:grid-flow-col items-center">
          <div className="col-span-1 lg:order-1 order-2">
            <div className="py-2 ">
              <Linktag href={`blog/${slug}`}>

                <Heading priority={4} style="text-black-200 dark:text-white font-displayHead hover:text-primary">{title}</Heading>
              </Linktag>
              <div className="py-2">
                <Text style="text-base text-black-100 line-clamp-2">{shortDes}</Text>
              </div>
            </div>

              <div className="flex lg:items-center items-start  lg:space-x-1 lg:space-y-0 space-y-2 space-x-0 lg:flex-row	 flex-col ">
                <Author
                  src={autherImage}
                  altText={altText || "profileImage"}
                  name={autherName}
                />

                <span className="px-1 lg:block hidden dark:text-white">|</span>
                <Text size="sm">{formatDate(publish_date)}</Text>
                <div className="lg:pl-4 pl-0">
                    <Tags>{category}</Tags>
                </div>
              </div>
          </div>
          <div className="lg:order-2 order-1">
          <Linktag href={`blog/${slug}`}>
            <div className=" col-span-1 h-40 relative w-80">
              <Image src={coverImg} alt="Image"  className="rounded-lg" layout="fill" objectFit="cover"/>
            </div>
          </Linktag>
          </div>
        </div>
      </article>
    </>
  );
}

export default Blog;
