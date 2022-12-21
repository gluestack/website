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
  caregory,
  autherImage,
  altText,
  slug,
}: any) {
  console.log(autherImage,"car");
  
  return (
    <>
      <article className="p-6 border border-gray rounded-lg bg-white">
        <div className="grid grid-cols-1 gap-3 md:grid-flow-col">
          <div className="col-span-1 lg:order-1 order-2">
            <div className="py-2 ">
              <Linktag href={`blog/${slug}`}>

                <Heading priority={4} style="text-black-200 font-displayHead hover:text-primary">{title}</Heading>
              </Linktag>
              <div className="py-2">
                <Text style="text-base text-black-100">{shortDes}</Text>
              </div>
            </div>

              <div className="flex lg:items-center items-start  lg:space-x-1 lg:space-y-0 space-y-2 space-x-0 lg:flex-row	 flex-col ">
                <Author
                  src={autherImage}
                  altText={altText || "profileImage"}
                  name={autherName}
                />

                <span className="px-1 lg:block hidden">|</span>
                <Text size="sm">{formatDate(publish_date)}</Text>
                <div className="lg:pl-4 pl-0">
                <Tags solid>{caregory}</Tags>
                </div>
              </div>
          </div>
          <div className="lg:order-2 order-1">
          <Linktag href={`blog/${slug}`}>
            <div className="flex items-center col-span-1">
              <Image src={coverImg} alt="Image" width={300} height={100} />
            </div>
          </Linktag>
          </div>
        </div>
      </article>
    </>
  );
}

export default Blog;
