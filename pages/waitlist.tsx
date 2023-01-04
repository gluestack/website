import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../Layout/Layout"), { ssr: true });

import { FaTwitter } from "react-icons/fa";
import Heading from "../elements/Heading";
import Gradient from "../public/images/gradient-pink.png";
import { TwitterShareButton } from "next-share";

function earlyAccess() {
  return (
    <Layout style="lg:flex lg:items-center lg:justify-center block"
      noAccess
      pageTitle={"One stack for web, mobile & backend"}
      description={
        "100% open source full-stack framework that takes away the complexities of building modern web & mobile apps. Build effortlessly and scale swiftly from idea to enterprise."
      }
    >
      <div className="max-w-[1024px] bg-white dark:bg-black lg:m-auto lg:mt-0 mt-20 m-4 shadow-xl rounded-lg  relative z-10 flex items-center">
        <div className="grid items-center gap-4 grid-col-1 lg:grid-cols-12">
          <div className="col-span-12 lg:px-20 lg:py-20 px-10 py-10 lg:col-span-6">
            <Heading priority={2}>Thanks for signing up.</Heading>
            <p className="mt-10 text-md text-black-200 dark:text-gray">
              You’re in the waitlist and will be notified as soon as a spot
              becomes available.
            </p>
            <div className="mt-10">
              <TwitterShareButton
                style={{ width: "100%" }}
                url={"https://gluestack.io"}
                title={`I’m ready to make full-stack fun again. Just signed up for the alpha access of @gluestackio. Get yours here at`}
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
          <div className="relative h-full col-span-12 lg:col-span-6">
            <Image
              className="object-contain w-full h-full"
              src="/images/waitlist-tweets.png"
              alt="gluestack Tweets"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-16 right-0 -z-10">
        <Image src={Gradient} alt="image" objectFit="contain" />
      </div>
    </Layout>
  );
}

export default earlyAccess;
