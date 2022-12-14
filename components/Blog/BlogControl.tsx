import React from "react";
import Image from "next/image";
import Text from "../../elements/Text";
import Linktag from "../../elements/Linktag";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function BlogControl({
  right,
  left,
  arrowTitle,
  blogTitle,
  href,
  altText,
  src,
}: any) {
  return (
    <>
      <div className="flex flex-col p-4 bg-gray-200 rounded-lg shadow-md dark:border-gray-200 md:flex-row dark:bg-black-200">
        <Image
          src={src}
          alt={altText || "profileImage"}
          width={200}
          className="rounded-lg "
          height={200}
        />
        <div className="flex flex-col justify-between p-2 leading-normal">
          <Linktag href={`${href}`}>
            <div className="flex items-center p-1">
              {right && <FaArrowLeft className=" dark:text-gray" />}
              <div className="pl-1">
                <Text size="md">{arrowTitle}</Text>
              </div>
              {left && <FaArrowRight className=" dark:text-gray" />}
            </div>
          </Linktag>
          <Text size="lg">{blogTitle}</Text>
        </div>
      </div>
    </>
  );
}

export default BlogControl;
