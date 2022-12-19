import React from "react";
import Image from "next/image";
import blognext from "/public/blog/Rectangle 3467571next.svg";
import leftArrow from "/public/blog/left.svg";
import rightArrow from "/public/blog/rightarrow.svg";
import Text from "../../elements/Text";
import Linktag from "../../elements/Linktag";
function BlogControl({ right, left, arrowTitle, blogTitle, href,altText }: any) {
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

      <div className="flex flex-col items-center p-5 bg-gray-100 border rounded-lg shadow-md md:flex-row">
        <Image
          src={blognext}
          alt={altText || "profileImage"}
          width={100}
          className="rounded-lg "
          height={100}
        />
        <div className="flex flex-col justify-between p-2 leading-normal">
          <Linktag href={`${href}`}>
            <div className="flex p-1">
              {right && <Image src={rightArrow} alt={altText || "icon"} className="" />}
              <Text size="md" style=" p-1">
                {arrowTitle}
              </Text>
              {left && <Image src={leftArrow} alt={altText || "icon"} className="" />}
            </div>
          </Linktag>
          <Text size="lg">{blogTitle}</Text>
        </div>
      </div>
    </>
  );
}

export default BlogControl;
