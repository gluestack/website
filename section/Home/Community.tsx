import React from "react";
import Button from "../../components/Button";
import Heading from "../../elements/Heading";
import Linktag from "../../elements/Linktag";
import Text from "../../elements/Text";

function Community() {
  return (
    <div className="relative overflow-hidden ">
         <span className="hidden absolute bg-gradient-to-r from-primary opacity-[.15] pointer-events-none lg:inline-flex left-[-20%] -top-24 w-[640px] h-[640px]"></span>
    <div className="container relative mx-auto py-14 lg:py-24">
      <div className="grid gap-12 md:pt-24 lg:grid-cols-2 lg:pt-16">
        <div className="flex items-center justify-center lg:justify-start">
          <div className="">
            <Heading
              isLight={undefined}
              color={undefined}
              priority={2}
            >
              A community built for people like you.
            </Heading>
            <Text size="md" font="light" style="leading-relaxed">
              Laravel is for everyone — whether you have been programming for 20
              years or 20 minutes. It's for architecture astronauts and weekend
              hackers. For those with degrees and for those who dropped out to
              chase their dreams. Together, we create amazing things.
            </Text>
            <div className="grid grid-cols-2 gap-10 mt-10 md:grid-cols-3">
              <Linktag style="inline-flex items-center" href="/car">
                <svg
                  className="w-8 h-8 text-primary"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="currentColor" d="M.5.5h31v31H.5z"></path>
                  <path
                    d="M10 9c7.18 0 13 5.82 13 13m-13-7a7 7 0 0 1 7 7m-6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <Text size="sm" style="ml-3">
                  Blog
                </Text>
              </Linktag>
              <Linktag style="inline-flex items-center" href="/car">
                <svg
                  className="w-8 h-8 text-primary"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="currentColor" d="M.5.5h31v31H.5z"></path>
                  <path
                    d="M10 9c7.18 0 13 5.82 13 13m-13-7a7 7 0 0 1 7 7m-6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <Text size="sm" style="ml-3">
                  Forums
                </Text>
              </Linktag>
              <Linktag style="inline-flex items-center" href="/car">
                <svg
                  className="w-8 h-8 text-primary"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="currentColor" d="M.5.5h31v31H.5z"></path>
                  <path
                    d="M10 9c7.18 0 13 5.82 13 13m-13-7a7 7 0 0 1 7 7m-6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <Text size="sm" style="ml-3">
                  Jobs
                </Text>
              </Linktag>
              <Linktag style="inline-flex items-center" href="/car">
                <svg
                  className="w-8 h-8 text-primary"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="currentColor" d="M.5.5h31v31H.5z"></path>
                  <path
                    d="M10 9c7.18 0 13 5.82 13 13m-13-7a7 7 0 0 1 7 7m-6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <Text size="sm" style="ml-3">
                  Laravel News
                </Text>
              </Linktag>
              <Linktag style="inline-flex items-center" href="/car">
                <svg
                  className="w-8 h-8 text-primary"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="currentColor" d="M.5.5h31v31H.5z"></path>
                  <path
                    d="M10 9c7.18 0 13 5.82 13 13m-13-7a7 7 0 0 1 7 7m-6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <Text size="sm" style="ml-3">
                  Laracasts
                </Text>
              </Linktag>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm px-6 pt-8 pb-12 border border-gray-200 -rotate-1 lg:px-12 lg:border-primary">
            <img
              src="/images/laracon.png"
              className="max-w-[218px] w-full mx-auto"
              alt="laracon"
            />
            <div className="text-primary">
              <Heading
                isLight={undefined}
                color={undefined}
                priority={3}
              >
                Watch us on Laracasts
              </Heading>
            </div>
            <h2 className="mt-3 text-4xl font-bold">Tune In</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              Laracasts includes free videos and tutorials covering the entire
              Laravel ecosystem. Stay up to date by watching our latest videos.
            </p>
            <div className="py-12">
              <Button lg>START WATCHING</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Community;
