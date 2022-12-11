import React from "react";
import Button from "../../components/Button";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";

function HeroSection() {
  return (
    <>
      <div className="container mx-auto">
        <section className="py-28">
          <span className="hero-gradient-color"></span>
          <div className="px-5 ">
            <div className="absolute left-2 -translate-y-12 pointer-events-none md:left-[12%]">
              <svg
                x-data="{
        initializeAnimation: false,
        init() {
            setTimeout(() => {
                this.initializeAnimation = true;
            }, 0);
        },
    }"
                className="text-red-600 "
                width="46"
                height="53"
                viewBox="0 0 46 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m23.102 1 22.1 12.704v25.404M23.101 1l-22.1 12.704v25.404"
                  stroke="currentColor"
                  stroke-width="1.435"
                  stroke-linejoin="bevel"
                ></path>
                <path
                  d="m45.202 39.105-22.1 12.702L1 39.105"
                  stroke="currentColor"
                  stroke-width="1.435"
                  stroke-linejoin="bevel"
                ></path>
                <path
                  transform="matrix(.86698 .49834 .00003 1 1 13.699)"
                  stroke="currentColor"
                  stroke-width="1.435"
                  stroke-linejoin="bevel"
                  d="M0 0h25.491v25.405H0z"
                ></path>
                <path
                  transform="matrix(.86698 -.49834 -.00003 1 23.102 26.402)"
                  stroke="currentColor"
                  stroke-width="1.435"
                  stroke-linejoin="bevel"
                  d="M0 0h25.491v25.405H0z"
                ></path>
                <path
                  transform="matrix(.86701 -.49829 .86701 .49829 1 13.702)"
                  stroke="currentColor"
                  stroke-width="1.435"
                  stroke-linejoin="bevel"
                  d="M0 0h25.491v25.491H0z"
                ></path>
              </svg>
            </div>

            <div className="">
              <div className="text-center">
                <Heading
                  title={"The PHP Framework"}
                  isLight={undefined}
                  color={undefined}
                  priority={1}
                  children={undefined}
                />
                <Heading
                  title={"for Web Artisans"}
                  isLight={undefined}
                  color={"primary"}
                  priority={1}
                  children={undefined}
                />
              </div>

              <Text style="para" size="md" font="light">
                Laravel is a web application framework with expressive, elegant
                syntax. We’ve already laid the foundation — freeing you to
                create without sweating the small things.
              </Text>
              <div className="hero-btn">
                <Button isSecondary>GET STARTED</Button>
                <Button>Watch Laracasts</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
