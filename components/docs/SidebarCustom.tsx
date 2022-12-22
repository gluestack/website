import { useState } from "react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../components/Header/Logo";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function app(props: any) {
  const router = useRouter();
  return (
    <nav className="pb-16">
      {/* font-displaySemibold */}
      <div className="px-10 pt-14 hidden md:block">
        <Logo />
      </div>
      <div className="md:flex-col  md:items-stretch md:flex-nowrap flex flex-wrap items-center justify-between w-full md:pt-4 md:px-5">
        <div className="pt-4 w-full">
          {props.sidebar.map((sidebarItem: any) => {
            return (
              <div className="mt-4 ">
                {props.showBackButton ? (
                  <Link className="px-10" href={"/docs"}>
                    {"<-"}
                  </Link>
                ) : (
                  ""
                )}
                <SidebarItems
                  props={sidebarItem}
                  version={props.version}
                  linkUrl="/docs"
                />
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

const SidebarItems = ({ props, version, linkUrl }: any) => {
  const router = useRouter();
  return (
    <>
      <div className="">
        {props?.type == "heading" && (
          <>
            {props.isCollapsed ? (
              <HeadingDropdown
                props={props}
                version={version}
                linkUrl={linkUrl}
              />
            ) : (
              <>
                <h2 className="font-displayMedium leading-tight text-lg mt-0 mb-2 text-gray-800 dark:text-white px-10 ">
                  {props.title}
                </h2>
                {props?.pages.map((pageInfo: any, index: any) => {
                  if (pageInfo.type == "heading") {
                    return (
                      <SidebarItems
                        props={pageInfo}
                        version={version}
                        linkUrl={linkUrl}
                        key={index}
                      />
                    );
                  }
                  return (
                    <Link href={linkUrl + "/" + version + "/" + pageInfo.id}>
                      <div
                        className={
                          router.route.includes(pageInfo.id)
                            ? "py-3 hover:cursor-pointer px-10 active dark:text-white"
                            : "py-3 hover:cursor-pointer px-10 dark:text-white"
                        }
                      >
                        {pageInfo.title}
                      </div>
                    </Link>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

const HeadingDropdown = ({ props, version, linkUrl }: any) => {
  const [isOpen, setIsOpen] = useState(props.default ?? false);
  const router = useRouter();

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item bg-white">
        <h2 className="accordion-header font-displaySemibold" id="headingOne">
          <button
            className="flex items-center w-full justify-between bg-white-200 dark:bg-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="py-3 hover:cursor-pointer pl-10 dark:text-white">
              {props.title}
            </div>
            {isOpen ? (
              <div className="pr-6 text-black dark:text-white">
                <FaCaretUp />
                {/* <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-up"
                  className="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                  ></path>
                </svg> */}
              </div>
            ) : (
              <div className="pr-10 text-black dark:text-white">
                <FaCaretDown />
                {/* <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg> */}
              </div>
            )}
          </button>
        </h2>
        <div
          id="collapseOne"
          className={`${
            isOpen ? "bg-white-200 dark:bg-black" : "hidden"
          }  accordion-collapse show `}
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          {props?.pages.map((pageInfo: any) => {
            if (pageInfo.type == "heading") {
              return (
                <SidebarItems
                  props={pageInfo}
                  version={version}
                  linkUrl={linkUrl}
                />
              );
            }

            return (
              <Link href={linkUrl + "/" + version + "/" + pageInfo.id}>
                <div
                  className={`py-3 hover:cursor-pointer pl-10 dark:text-white
                    ${router.route.includes(pageInfo.id) ? "active" : ""}`}
                >
                  {pageInfo.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function DotIcon() {
  return <div className="h-3 w-3 rounded-full bg-[#BF7EFF]"> </div>;
}
