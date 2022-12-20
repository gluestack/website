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
      <article className="p-6 border border-gray-200 rounded-lg">
        <div className="grid grid-cols-1 gap-3 md:grid-flow-col">
          <div className="col-span-1">
            <div className="py-2 ">
              <Linktag href={`blog/${slug}`}>
                <Heading priority={4}>{title}</Heading>
              </Linktag>
              <div className="py-2">
                <Text style="text-base">{shortDes}</Text>
              </div>
            </div>

            <div className="flex items-center justify-between py-2 ">
              <div className="flex items-center space-x-4 ">
                <Author
                  src={autherImage}
                  altText={altText || "profileImage"}
                  name={autherName}
                />

                <span className="px-1">|</span>
                <Text size="sm">{formatDate(publish_date)}</Text>
                <Tags solid>{caregory}</Tags>
              </div>
            </div>
          </div>
          <Linktag href={`blog/${slug}`}>
            <div className="flex items-center col-span-1">
              <Image src={coverImg} alt="Image" width={300} height={100} />
            </div>
          </Linktag>
        </div>
      </article>
    </>
  );
}

export default Blog;
