import { useState } from "react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../components/Header/Logo";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

export default function app(props: any) {
  const router = useRouter();
  return (
    <nav className="pb-16 xl:w-80 xl:ml-auto">
      <div className="px-10 pt-14 hidden md:block">
        <Logo />
      </div>
      <div className="md:flex-col  md:items-stretch md:flex-nowrap flex flex-wrap items-center justify-between w-full md:pt-4 md:pl-5">
        <div className="pt-4 w-full">
          {props.sidebar.map((sidebarItem: any, index:any) => {
            return (
              <div className="mt-4 link-list pb-4" key={index}>
                {props.showBackButton ? (
                  <div  className="mx-10 dark:text-white-300" >
                    <Link href={"/docs"} className="inline-block px-4 py-2 rounded-sm border border-gray-300">
                      <BiArrowBack />
                    </Link>
                  </div>
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
                <div  className={`uppercase font-displayMedium leading-tight text-base font-bold text-gray-300 dark:text-gray-400 px-10 mb-2  ${props.title ? 'mt-6' : ''}`} >
                  {props.title}
                </div>
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
                      <div className="leftLinks"  key={index} >
                        <Link href={linkUrl + "/" + version + "/" + pageInfo.id} className={
                          router.route.includes(pageInfo.id)
                            ? "active leftAnchors"
                            : "leftAnchors"
                        }>
                          {pageInfo.title}
                        </Link>

                      </div>
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
      <div className="accordion-item">
        <div className="accordion-header " id="headingOne">
          <button
            className="flex items-center w-full justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="py-2 pl-10 leftLinks cursor-default">
              {props.title}
            </div>
              <div className={`${
                    isOpen ? "rotate-180" : ""
                  }  text-black-400 dark:text-white-300 px-3 transition-all duration-50 `}>
                    <FaCaretDown />
              </div>
          </button>
        </div>
        <div
          id="collapseOne"
          className={`${
            isOpen ? "" : "hidden"
          }  accordion-collapse show`}
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          {props?.pages.map((pageInfo: any, index:any) => {
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
                <div className="leftLinks accordionLinks cursor-default"  key={index}>
                  <Link href={linkUrl + "/" + version + "/" + pageInfo.id} className={`leftAnchors  
                    ${router.route.includes(pageInfo.id) ? "active" : ""}`} >
                      {pageInfo.title}
                  </Link>
                </div>
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
