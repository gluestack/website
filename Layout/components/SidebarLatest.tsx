import { useState } from "react";
import React from "react";
import Link from "next/link";
import { Dropdown } from "./Dropdown";
import { useRouter } from "next/router";
import { link, linkSync } from "fs";

export default function SidebarLatest(props: any) {
  return (
    <nav className=" font-displaySemibold bg-gray">
      <div className="px-12 pt-16">
        <SidebarHeader />
      </div>
      <div className="md:flex-col px-6 md:items-stretch md:flex-nowrap flex flex-wrap items-center justify-between w-full pt-8">
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
      <RenderSidebar sidebarData={mainDocsVersionData} linkUrl={linkUrl} />
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
            <div className="mt-4 ">
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

function SidebarHeader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="35"
      viewBox="0 0 209 41"
      fill="none"
    >
      <path
        d="M44.695 22.6262L22.3463 35.9813L0.00232977 22.6192L0 27.6378L22.344 41L44.6927 27.6449L44.695 22.6262Z"
        fill="#9F40FD"
      />
      <path
        d="M44.6973 14.4252L22.3487 27.7804L0.00232977 14.4182V19.7056L22.3463 33.0678L44.695 19.7126L44.6973 14.4252Z"
        fill="#9F40FD"
      />
      <path
        d="M31.1117 4.92757L18.5362 12.2126L18.5409 12.2196L22.6186 14.5818L31.114 9.66122L35.5316 12.222L22.607 19.7103L9.68473 12.2173L26.6918 2.36682L22.6093 0L1.52219 12.2173L22.607 24.4416L43.6965 12.222L31.1117 4.92757Z"
        fill="#9F40FD"
      />
      <path
        d="M67.6735 32.8285C72.9898 32.8285 76.3083 30.127 76.3083 26.1659V8.89623H71.4874V11.9292H71.3883C70.4307 9.8575 68.499 8.53161 66.006 8.53161C61.5318 8.53161 58.7581 11.896 58.7581 17.5642V17.5808C58.7581 23.0998 61.4987 26.4145 65.9234 26.4145C68.4825 26.4145 70.4637 25.2378 71.3883 23.3815H71.4874V26.0996C71.4874 28.0884 70.1665 29.3812 67.6735 29.3812C65.6593 29.3812 64.3715 28.6188 63.9918 27.7404L63.9422 27.6244H59.2534L59.2699 27.7735C59.7322 30.6242 62.803 32.8285 67.6735 32.8285ZM67.591 22.8678C65.1805 22.8678 63.6616 20.8955 63.6616 17.6968V17.6802C63.6616 14.4981 65.197 12.5424 67.591 12.5424C69.9354 12.5424 71.5039 14.5147 71.5039 17.6802V17.6968C71.5039 20.8789 69.9519 22.8678 67.591 22.8678Z"
        fill="#404040"
      />
      <path
        d="M79.5938 26.6631H84.4148V2.74743H79.5938V26.6631Z"
        fill="#404040"
      />
      <path
        d="M93.6934 27.0277C96.3681 27.0277 98.1842 25.7681 99.0922 23.7296H99.1913V26.6631H104.012V8.89623H99.1913V19.1056C99.1913 21.4259 97.821 23.0169 95.6581 23.0169C93.4953 23.0169 92.4056 21.6745 92.4056 19.3542V8.89623H87.5847V20.3651C87.5847 24.5251 89.7971 27.0277 93.6934 27.0277Z"
        fill="#404040"
      />
      <path
        d="M115.206 27.0277C120.258 27.0277 122.702 24.0279 123.247 21.4093L123.296 21.227H118.871L118.838 21.3264C118.492 22.3208 117.286 23.4147 115.305 23.4147C112.845 23.4147 111.31 21.7573 111.26 18.9232H123.445V17.4316C123.445 12.0618 120.192 8.53161 115.008 8.53161C109.824 8.53161 106.505 12.1447 106.505 17.7962V17.8128C106.505 23.4976 109.791 27.0277 115.206 27.0277ZM115.091 12.1447C117.088 12.1447 118.525 13.4208 118.822 15.8737H111.31C111.623 13.4705 113.109 12.1447 115.091 12.1447Z"
        fill="#404040"
      />
      <path
        d="M133.219 27.0277C137.775 27.0277 140.962 24.7406 140.962 21.2601V21.2435C140.962 18.6249 139.443 17.1664 135.745 16.3875L132.74 15.7411C130.957 15.3599 130.346 14.7633 130.346 13.8517V13.8352C130.346 12.6916 131.386 11.9458 133.054 11.9458C134.837 11.9458 135.877 12.907 136.042 14.1832L136.058 14.3158H140.5V14.1501C140.384 11.0342 137.759 8.53161 133.054 8.53161C128.546 8.53161 125.64 10.7193 125.64 14.1003V14.1169C125.64 16.7687 127.374 18.4923 130.808 19.2216L133.813 19.8514C135.547 20.2326 136.141 20.7795 136.141 21.7242V21.7408C136.141 22.8843 135.035 23.597 133.219 23.597C131.287 23.597 130.247 22.7849 129.933 21.3927L129.9 21.2435H125.195L125.211 21.3927C125.591 24.7571 128.315 27.0277 133.219 27.0277Z"
        fill="#404040"
      />
      <path
        d="M150.373 27.0277C151.38 27.0277 152.156 26.9283 152.701 26.8454V23.2987C152.403 23.3318 152.09 23.3815 151.66 23.3815C150.208 23.3815 149.465 22.818 149.465 21.1607V12.5424H152.701V8.89623H149.465V4.55395H144.594V8.89623H142.134V12.5424H144.594V21.691C144.594 25.503 146.443 27.0277 150.373 27.0277Z"
        fill="#404040"
      />
      <path
        d="M160.46 26.9449C162.788 26.9449 164.67 25.8344 165.677 24.0113H165.777V26.6631H170.597V14.4815C170.597 10.9016 167.642 8.53161 163.069 8.53161C158.397 8.53161 155.59 10.8851 155.326 14.1666L155.309 14.3655H159.717L159.75 14.2163C159.981 13.0728 161.071 12.2275 162.871 12.2275C164.753 12.2275 165.777 13.2054 165.777 14.7799V15.8737L161.401 16.1389C157.01 16.4206 154.517 18.31 154.517 21.5419V21.575C154.517 24.7074 156.911 26.9449 160.46 26.9449ZM159.288 21.3264V21.2933C159.288 20.0337 160.262 19.2381 162.128 19.1221L165.777 18.8901V20.1663C165.777 22.0225 164.192 23.4147 162.029 23.4147C160.361 23.4147 159.288 22.6357 159.288 21.3264Z"
        fill="#404040"
      />
      <path
        d="M181.808 27.0277C186.53 27.0277 189.584 24.0776 189.815 20.1994V20.1H185.324L185.308 20.2491C184.978 22.0391 183.773 23.2324 181.841 23.2324C179.463 23.2324 177.978 21.2601 177.978 17.7797V17.7631C177.978 14.3655 179.463 12.327 181.824 12.327C183.822 12.327 184.994 13.6197 185.291 15.3102L185.324 15.4594H189.799V15.3434C189.617 11.4983 186.563 8.53161 181.758 8.53161C176.459 8.53161 173.074 12.0618 173.074 17.7465V17.7631C173.074 23.4976 176.409 27.0277 181.808 27.0277Z"
        fill="#404040"
      />
      <path
        d="M192.308 26.6631H197.129V20.7795L198.367 19.4039L203.436 26.6631H209L201.983 16.5367L208.67 8.89623H203.205L197.228 16.0063H197.129V2.74743H192.308V26.6631Z"
        fill="#404040"
      />
    </svg>
  );
}

function DotIcon() {
  return <div className="h-3 w-3 rounded-full bg-[#BF7EFF]"> </div>;
}
