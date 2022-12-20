import { useState } from "react";
import React from "react";
import Link from "next/link";
import { Dropdown } from "./Dropdown";
import { useRouter } from "next/router";
import { link, linkSync } from "fs";
import Logo from "../../components/Header/Logo";

export default function SidebarLatest(props: any) {
  return (
    <nav className="font-displaySemibold">
      <div className="px-12 pt-16 hidden md:block">
        <Logo />
      </div>
      <div className="md:flex-col px-6 md:items-stretch md:flex-nowrap flex flex-wrap items-center justify-between w-full md:pt-8">
        <div className="link-list">
          <SidebarDocs {...props} linkUrl="/docs" />
        </div>
      </div>
    </nav>
  );
}

const SidebarDocs = (props: any) => {
  const router = useRouter();
  let versionData = props.versions[props.versions.length - 1];
  const [mainDocsVersion, setMainDocsVersion] = useState(
    getVersion(versionData)
  );

  for (let i = 0; i < props.versions.length; i++) {
    if (getVersion(props.versions[i]) == mainDocsVersion) {
      versionData = props.versions[i];
    }
  }

  const mainDocsVersionData = versionData[mainDocsVersion].sidebar;
  const linkUrl = props.linkUrl + "/" + mainDocsVersion;
  // console.log(props, "PROPPPPSS", linkUrl);
  return (
    <div>
      <div className="flex justify-between mx-2 items-center">
        {/* <p className="text-black">{props?.title}</p> */}
        {props?.title ? (
          <>
            <CategoryDropdown title={props.title} />
            {/* <Dropdown
              selectedVersion={mainDocsVersion}
              versions={props.versions}
              setVersion={setMainDocsVersion}
              linkUrl={linkUrl}
            ></Dropdown> */}
          </>
        ) : (
          <></>
          // <h2 className="font-medium leading-tight bold text-md mt-0 mb-2 text-gray-600 px-6 ">
          //   Website Versions
          // </h2>
        )}
      </div>
      <div className="my-6"></div>
      <div className="link-list">
          <RenderSidebar sidebarData={mainDocsVersionData} linkUrl={linkUrl} />
      </div>
    </div>
  );
};

const RenderSidebar = (props: any) => {
  // console.log(props);
  return (
    <>
      {props.sidebarData.map((info: any) => {
        // if(info.type=="sidebar"){
        //   return
        // }
        if (info.type == "docs") {
          return (
            <div>
              <SidebarDocs
                title={info.title}
                versions={info.versions}
                linkUrl={props.linkUrl + "/" + info.title}
              />
            </div>
          );
        } else {
          return (
            <div>
              <SidebarItems
                props={info}
                version={props.version}
                linkUrl={props.linkUrl}
              />
            </div>
          );
        }
      })}
    </>
  );
};

const SidebarItems = ({ props, version, linkUrl }: any) => {
  const router = useRouter();

  return (
    <>
      <div className="">
        {(props?.type == "heading" || props?.type == "sidebar") && (
          <>
            {props?.type == "sidebar" || props?.isCollapsable ? (
              // <HeadingDropdown props={props} version={version} />
              <CategoryDropdown
                props={props}
                version={version}
                linkUrl={linkUrl}
              />
            ) : (
              // <div className="text-black">hihihi</div>
              <>
                <h2 className="font-sm ml-2 font-displayHead text-black-100 leading-tight mt-0 mb-2 px-6 ">
                  {props.title}
                </h2>
                {props?.pages.map((pageInfo: any) => {
                  if (pageInfo.type == "heading") {
                    return (
                      <SidebarItems
                        props={pageInfo}
                        version={version}
                        linkUrl={
                          props?.type == "sidebar"
                            ? linkUrl + "/" + props.title
                            : linkUrl
                        }
                      />
                    );
                  }
                  // console.log(linkUrl);
                  return (
                    <Link href={linkUrl + "/" + pageInfo.id}>
                      <div className="active text-black-100 ml-6 py-3 hover:cursor-pointer px-6 ">
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

function CategoryDropdown({ props, version, linkUrl }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item bg-white">
        <h2 className="accordion-header " id="headingOne">
          <button
            className="relative flex items-center w-full text-gray-800 justify-between flex px-6 accordion-body py-3 hover:bg-gray-100 hover:cursor-pointer px-6  hover:bg-gray-100 font-medium leading-tight text-md mt-0 mb-2 text-gray-400 rounded-none transition focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="truncate-ellipsis">{props.title}</div>
            {isOpen ? (
              <>
                <svg
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
                </svg>
              </>
            ) : (
              <>
                <svg
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
                </svg>
              </>
            )}
          </button>
        </h2>
        <div
          id="collapseOne"
          // className="accordion-collapse show"
          className={`${
            isOpen ? "" : "hidden"
          } bg-white accordion-collapse show `}
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          {props?.pages.map((pageInfo: any) => {
            // console.log(pageInfo);
            if (pageInfo.type == "heading") {
              return (
                <SidebarItems
                  props={pageInfo}
                  version={version}
                  linkUrl={
                    props?.type == "sidebar"
                      ? linkUrl + "/" + props.title
                      : linkUrl
                  }
                />
              );
            }
            return (
              <Link
                href={linkUrl + "/" + pageInfo.id}
                // onClick={() => handleItemClick(pageInfo)}
              >
                <DotIcon />
                <div className="text-gray-600 pl-8 accordion-body py-3 hover:bg-gray-100 hover:cursor-pointer px-6">
                  {pageInfo.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function getVersion(versionInfo: any) {
  return Object.keys(versionInfo)[0];
}

const HeadingDropdown = ({ props, version }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item bg-white">
        <h2 className="accordion-header " id="headingOne">
          <button
            className="relative flex items-center w-full text-gray-800 justify-between flex px-6 accordion-body py-3 hover:bg-gray-100 hover:cursor-pointer px-6  hover:bg-gray-100 text-black rounded-none transition focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="truncate-ellipsis">{props.title}</div>
            {isOpen ? (
              <svg
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
              </svg>
            ) : (
              <>
                <svg
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
                </svg>
              </>
            )}
          </button>
        </h2>
        <div
          id="collapseOne"
          // className="accordion-collapse show"
          className={`${
            isOpen ? "" : "hidden"
          } bg-white accordion-collapse show `}
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          {/* <div className=" py-4 bg-red.900 text-black px-5">
            hihi
          </div> */}
          {props?.pages.map((pageInfo: any) => {
            // console.log(pageInfo);
            if (pageInfo.type == "heading") {
              return <SidebarItems props={pageInfo} version={version} />;
            }
            return (
              <Link
                href={"/" + version + "/" + pageInfo.id}
                // onClick={() => handleItemClick(pageInfo)}
              >
                <div className="text-gray-800 pl-8 accordion-body py-3 hover:bg-gray-100 hover:cursor-pointer px-6">
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
