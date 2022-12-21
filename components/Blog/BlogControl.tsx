import React from "react";
import Image from "next/image";
import Text from "../../elements/Text";
import Linktag from "../../elements/Linktag";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
function BlogControl({ right, left, arrowTitle, blogTitle, href,altText,src }: any) {
  return (
    <>
      {/* <div className="p-6 border border-gray-200 rounded-lg">
        <div className="grid items-center grid-flow-col gap-3">
          <div className="col-span-1 rounded-lg ">
            <Image
              src={blognext}
              alt="Image"
              width={100}
              className="rounded-lg"
              height={100}
            />
          </div>
          <div className="col-span-1 ">
           <Linktag href={`${href}`}>
           <div className="flex p-1">
              {right && <Image src={rightArrow} alt={""} className="" />}
              <Text size="sm" style="font-bold p-1">
                {arrowTitle}
              </Text>
              {left && <Image src={leftArrow} alt={""} className="" />}
            </div>
           </Linktag>
            <Text size="lg">{blogTitle}</Text>
          </div>
        </div>
      </div> */}

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
            <div className="flex p-1">
              {right && <FaArrowLeft className=" mt-2.5 dark:text-white"/>}
              <Text size="md" style=" p-1">
                {arrowTitle}
              </Text>
              {left &&<FaArrowRight className="mt-2.5 dark:text-white"/>}
            </div>
          </Linktag>
          <Text size="lg">{blogTitle}</Text>
        </div>
      </div>
    </>
  );
}

export default BlogControl;
