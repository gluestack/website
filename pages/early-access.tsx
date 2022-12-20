import Image from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Heading from "../elements/Heading";
import Text from "../elements/Text";
import earlycard from "../public/earlyaccess/access.svg";
import Meta from "../components/Meta";
import { TwitterShareButton } from "next-share";
function earlyAccess() {
  return (
    <div className="bg-black h-screen flex items-center">
      <Meta
        title={"Early Access - gluestack"}
        ogImgUrl="https://gluestack-strapi.sfo3.digitaloceanspaces.com/2a2f3f2203e30184ed5e08c98f6b6024.png?updated_at=2022-12-19T11:05:50.987Z"
      />
      <div className="max-w-[1400px]  m-auto my-12 bg-white ">
        <div className="grid gap-4 grid-col-1 lg:grid-cols-2 items-center">
          <div className="px-20 py-32">
            <Heading priority="1">Thanks for signing up.</Heading>
            <div className="lg:w-5/6 py-6">
              <Text size="lg" style="text-black-200 font-displayLight">
                You&lsquo;re
                <span className="font-displaySemibold text-black-200">
                  &nbsp;#542&nbsp;
                </span>
                in the waitlist and will be notified as soon as a spot becomes
                available.
              </Text>
            </div>
            <Text size="lg" style="lg:w-5/6 font-displayHead text-black-100">
              Share this to win credits when you deploy your app on our hosting
              platform.
            </Text>
            <div className="mt-8">
              <TwitterShareButton
                url={"https://gluestack.io/early-access"}
                title={
                  "Share this to win credits when you deploy your app on our hosting platform."
                }
              >
                <Button xxl tertiary>
                  <div className="flex items-center">
                    <div className="pr-4">
                      <FaTwitter />
                    </div>
                    Share on twitter
                  </div>
                </Button>
              </TwitterShareButton>
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
