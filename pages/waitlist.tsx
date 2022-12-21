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
    <div className="flex items-center h-screen p-20 bg-white">
      <Meta
        title={"Early Access - gluestack"}
        ogImgUrl="https://gluestack-strapi.sfo3.digitaloceanspaces.com/2a2f3f2203e30184ed5e08c98f6b6024.png?updated_at=2022-12-19T11:05:50.987Z"
      />
      <div className="max-w-[1400px]  m-auto">
        <div className="grid items-center gap-4 grid-col-1 lg:grid-cols-12">
          <div className="col-span-6 px-20 py-32">
            <h3 className="text-[56px] leading-[67.2px] font-bold">
              Thanks for signing up.
            </h3>
            <p className="mt-10 text-2xl text-black-200">
              You’re in the waitlist and will be notified as soon as a spot
              becomes available.
            </p>
            <p className="mt-16 text-2xl font-bold text-black-100">
              Share this to win credits when you deploy your app on our hosting
              platform.
            </p>
            <div className="mt-10">
              <TwitterShareButton
                style={{ width: "100%" }}
                url={"https://gluestack.io/early-access"}
                title={
                  "Share this to win credits when you deploy your app on our hosting platform."
                }
              >
                <button className="flex items-center justify-center w-full py-4 text-white rounded-full bg-skyBlue">
                  <div className="pr-4">
                    <FaTwitter />
                  </div>
                  Share on twitter
                </button>
              </TwitterShareButton>
            </div>
          </div>
          <div className="relative h-full col-span-6 ">
            <Image
              className="object-contain w-full h-full"
              src="/images/waitlist-tweets.png"
              alt=""
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default earlyAccess;
