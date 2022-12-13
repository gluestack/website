import Image from "next/image";
import React from "react";
import Heading from "../elements/Heading";
import Text from "../elements/Text";
import Button from "./Button";
import plane from "../public/images/plane.svg";

function NewsLetter() {
  return (
    <>
      <div className="newsletter">
        <div className="plane">
          <Image src={plane} alt="image" />
        </div>
        <div className="container mx-auto ">
          <div className="text-center">
            <Heading
              title={undefined}
              isLight={true}
              color={undefined}
              priority={2}
            >
              Join our Newsletter
            </Heading>
            <div className="px-0 pt-2 lg:px-[330px]">
              <Text isLight size="lg" style="font-normal">
                If you're interested in staying up-to-date on the latest news
                and developments in our field, we invite you to join our
                newsletter.
              </Text>
            </div>
            <div className="newsText">
              <div className="p-3 py-2">
                <div className="">
                 <form action="">
                 <input
                    type="text"
                    className="newsInput"
                    name=""
                    placeholder="Email Address"
                  />
                 </form>
                </div>
              </div>
              <div className="py-8 lg:py-2">
                <Button bgcolor="bg-primary-600" isSecondary>
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
