import React from "react";
import Image from "next/image";
import blognext from "/public/blog/Rectangle 3467571next.svg";
import leftArrow from "/public/blog/left.svg";
import rightArrow from "/public/blog/rightarrow.svg";
import Text from "../../elements/Text";
import Linktag from "../../elements/Linktag";
function BlogControl({ right, left, arrowTitle, blogTitle }: any) {
  return (
    <>
      <div className="p-6 border border-gray-200 rounded-lg">
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
           <Linktag href=''>
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
      </div>
    </>
  );
}

export default BlogControl;
