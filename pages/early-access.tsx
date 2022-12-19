import Image from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Description from "../elements/Description";
import Heading from "../elements/Heading";
import Text from "../elements/Text";
import earlycard from "../public/earlyaccess/access.svg";
import Meta from "../components/Meta";

function earlyAccess() {
  return (
    <div className="	">
      <Meta
        title={"Early Access - gluestack"}
        ogImgUrl="https://gluestack-strapi.sfo3.digitaloceanspaces.com/2a2f3f2203e30184ed5e08c98f6b6024.png?updated_at=2022-12-19T11:05:50.987Z"
      />
      <div className="max-w-[1200px]  m-auto my-12 bg-white-100 ">
      <div className="grid gap-4 grid-col-1 lg:grid-cols-2 items-center">
        <div className="p-8 lg:py-28">
            <Heading priority="1">Thanks for signing up.</Heading>
            <div className="lg:w-5/6 text-start">
              <Description>
                You’re
                <span className="font-displaySemibold text-black-200">
                  #542
                </span>
                in the waitlist and will be notified as soon as a spot becomes
                available.
              </Description>
            </div>
            <Text
              size="lg"
              style="lg:w-5/6 font-displaySemibold text-black-200"
            >
              Share this to win credits when you deploy your app on our hosting
              platform.
            </Text>
            <div className="mt-8">
              <Button xxl tertiary>
                <div className="flex items-center">
                  <div className="pr-4">
                    <FaTwitter />
                  </div>
                  Share on twitter
                </div>
              </Button>
            </div>
        </div>
        <div className="relative  lg:static bg-primary h-full">
          <div className="absolute top-[30%] right-[20%] -rotate-12">
            <Image src={earlycard} alt="" width={600} />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default earlyAccess;
