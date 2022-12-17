import React from "react";
import Image from "next/image";
import Button from "../../components/Button";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";
import Linktag from "../../elements/Linktag";
import Tags from "../Tags";
import { formatDate } from "../../Hooks/FormatDate";
function Blog({
  title,
  shortDes,
  coverImg,
  publish_date,
  autherName,
  blogTag,
  caregory,
  slug,
}: any) {
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
                <Text style="text-[16px]">{shortDes}</Text>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 ">
              <div className="flex items-center space-x-4 ">
                <Image
                  src={
                    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  }
                  className="rounded-full"
                  width={40}
                  height={50}
                  alt={""}
                />
                <div className="flex">
                  <Text size="sm">{autherName}</Text>
                  <span className="px-1">|</span>
                  <Text size="sm">{formatDate(publish_date)}</Text>
                </div>
                <Tags isTag>{caregory}</Tags>
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
