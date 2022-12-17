import React from "react";
import Image from "next/image";
import Button from "../../components/Button";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";
import blog1 from "../../public/blog/blog1.png";
import Author from "../Author";
function Blog() {
  return (
    <>
      <article className="p-6 border border-gray-200 rounded-lg">
        <div className="grid grid-cols-1 gap-3 md:grid-flow-col">
          <div className="col-span-1">
            <div className="py-2 ">
              <Heading priority={4}>
                Lorem ipsum dolor sit amet con. Arcu tristique egestas sit
                pulvinar Arcu tristique egestas .
              </Heading>
              <div className="py-2">
                <Text style="text-base">
                  Lorem ipsum dolor sit amet consectetur. Arcu tristique egestas
                  sit pulvinar. Amet rhoncus quis dignissim adipiscing
                  suspendisse. A hendrerit lorem pulvinar nec...
                </Text>
              </div>
            </div>

            <div className="flex items-center justify-between py-2 ">
              <div className="flex items-center space-x-4 ">
                <Author
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  altText="william"
                  name="Williams rocket"
                />

                <span className="px-1">|</span>
                <Text size="sm">November 28, 2022</Text>
              <Button isSecondary sm>
                Community
              </Button>
              </div>

            </div>
          </div>
          <div className="flex items-center col-span-1">
            <Image src={blog1} alt="Image" width={300} height={100} />
          </div>
        </div>
      </article>
    </>
  );
}

export default Blog;
