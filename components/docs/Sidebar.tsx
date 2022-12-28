import { useState } from "react";
import React from "react";
import Link from "next/link";
import { Dropdown } from "./Dropdown";
import { useRouter } from "next/router";

export default function Sidebar(props: any) {
  return (
    <nav className="md:left-0 md:h-full md:overflow-y-auto md:flex-row md:flex-nowrap shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-96 z-10 ">
      <div className="md:flex-col md:items-stretch overflow-hidden md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full">
        <div className="pt-4 ">
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
  // console.log(props, "PROPPPPSS");
  return (
    <div >
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
          // <h2 className="font-medium leading-tight bold text-md mt-0 mb-2 text-gray-600 px-10 ">
          //   Website Versions
          // </h2>
        )}
      </div>
      <div className="my-6"></div>
      <RenderSidebar sidebarData={mainDocsVersionData} linkUrl={linkUrl} />
    </div>
  );
};

const RenderSidebar = (props: any) => {
  return (
    <>
      {props.sidebarData.map((info: any) => {
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
            <div className="mt-4">
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
  return (
    <>
      <div className="">
        {props?.type == "heading" && (
          <>
            {props.isCollapsed ? (
              <HeadingDropdown props={props} version={version} />
            ) : (
              // <div className="text-black">hihihi</div>
              <>
                <h2 className="font-medium leading-tight text-md mt-0 mb-2 text-gray-400 px-10 ">
                  {props.title}
                </h2>
                {props?.pages.map((pageInfo: any, index:any) => {
                  if (pageInfo.type == "heading") {
                    return <SidebarItems props={pageInfo} version={version} key={index} />;
                  }

                  return (
                    <Link href={linkUrl + "/" + pageInfo.id} key={index}>
                      <div className="text-gray-800 dark:text-gray py-3 hover:bg-gray-100 hover:cursor-pointer px-10 ">
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

const HeadingDropdown = ({ props, version }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <div className="accordion-header font-displaySemibold" id="headingOne">
          <button
            className="relative flex items-center w-full text-gray-800 dark:text-gray justify-between flex px-10 accordion-body py-3 hover:bg-gray-100 hover:cursor-pointer px-10  hover:bg-gray-100 text-black rounded-none transition focus:outline-none"
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
        </div>
        <div
          id="collapseOne"
          // className="accordion-collapse show"
          className={ `${
            isOpen ? "" : "hidden"
          } accordion-collapse show`}
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          {/* <div className=" py-4 bg-red.900 text-black px-5">
            hihi
          </div> */}
          {props?.pages.map((pageInfo: any, index:any) => {
            // console.log(pageInfo);
            if (pageInfo.type == "heading") {
              return <SidebarItems props={pageInfo} version={version}  key={index}/>;
            }
            return (
              <Link
                href={"/" + version + "/" + pageInfo.id} key={index}
                // onClick={() => handleItemClick(pageInfo)}
              >
                <div className="text-gray-800 dark:text-gray pl-8 accordion-body py-3 hover:bg-gray-100 hover:cursor-pointer px-10 pl-[60px]">
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

function CategoryDropdown(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <div className="accordion-header font-displaySemibold" id="headingOne">
          <button
            className="relative flex items-center w-full text-gray-800 dark:text-gray justify-between flex px-10 accordion-body py-3 hover:bg-gray-100 hover:cursor-pointer px-10  hover:bg-gray-100 text-black rounded-none transition focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="truncate-ellipsis">{props.title}</div>
            {isOpen ? (
              <></>
            ) : (
              // <svg
              //   aria-hidden="true"
              //   focusable="false"
              //   data-prefix="fas"
              //   data-icon="caret-up"
              //   className="w-2 ml-2"
              //   role="img"
              //   xmlns="http://www.w3.org/2000/svg"
              //   viewBox="0 0 320 512"
              // >
              //   <path
              //     fill="currentColor"
              //     d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
              //   ></path>
              // </svg>
              <>
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
              </>
            )}
          </button>
        </div>
        <div
          id="collapseOne"
          // className="accordion-collapse show"
          className={`${
            isOpen ? "" : "hidden"
          } bg-white accordion-collapse show `}
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          jnbkjbkjbkj
          {/* <div className=" py-4 bg-red.900 text-black px-5">
            hihi
          </div> */}
          {/* {props?.pages.map((pageInfo: any) => {
            // console.log(pageInfo);
            if (pageInfo.type == "heading") {
              return <SidebarItems props={pageInfo} version={version} />;
            }
            return (
              <Link
                href={"/" + version + "/" + pageInfo.id}
                // onClick={() => handleItemClick(pageInfo)}
              >
                <div className="text-gray-800 pl-8 accordion-body py-3 hover:bg-gray-100 hover:cursor-pointer px-10">
                  {pageInfo.title}
                </div>
              </Link>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}

function getVersion(versionInfo: any) {
  return Object.keys(versionInfo)[0];
}
