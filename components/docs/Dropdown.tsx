// import { useState } from "react";

// export const Dropdown = ({ versions, setVersion }: any) => {
//   const [isOpen, setOpen] = useState(false);

//   const handleDropDown = () => {
//     setOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button
//         id="dropdownDividerButton"
//         data-dropdown-toggle="dropdownDivider"
//         className="text-white bg-red-100 focus:outline-none font-medium rounded-md text-sm px-1 py-1 text-center inline-flex items-center"
//         type="button"
//         onClick={handleDropDown}
//       >
//         <svg
//           className="ml-2 w-4 h-4"
//           aria-hidden="true"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="M19 9l-7 7-7-7"
//           ></path>
//         </svg>
//       </button>

//       <div
//         id="dropdown"
//         className={`${
//           isOpen ? "" : "hidden"
//         }  z-10 absolute bg-white  w-44 rounded shadow dark:border-2 border-blue-100 `}
//       >
//         <ul
//           className="py-1 text-sm text-gray-700"
//           aria-labelledby="dropdownDefault"
//         >
//           {versions.map((item: any, index: any) => {
//             return (
//               <li className="py-1 text-sm text-gray-700" key={index}>
//                 <button
//                   onClick={() => {
//                     setVersion(Object.keys(item)[0]);
//                   }}
//                 >
//                   {Object.keys(item)[0]}
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export const Dropdown = ({
  selectedVersion,
  versions,
  setVersion,
  linkUrl,
}: any) => {
  let dropdownLinkUrl = "";
  // console.log(selectedVersion, versions, linkUrl, "IN DROPDOWN");
  // console.log(versions);
  const getFirstVersionItem = (version1: any) => {
    // console.group(version1, linkUrl, selectedVersion);

    versions.map((version: any) => {
      // console.log(version);
      if (Object.keys(version)[0] == selectedVersion) {
        const item = version[Object.keys(version)[0]].sidebar[0];

        if (item.type == "heading") {
          // console.log(item, version, linkUrl, "IN HEADING");

          let link = linkUrl.split("/");
          link.pop();
          link.push(version1);
          // console.log("in heading", item, link.join("/"));
          dropdownLinkUrl = link.join("/") + "/" + item.pages[0].id;
        } else {
          dropdownLinkUrl = "/docs" + "/" + version1;
          if (item.type == "docs") {
            let link = linkUrl.split("/");
            // console.log(item, version, linkUrl, "IN DROPDOWN");

            // console.log(
            //   link,
            //   linkUrl,
            //   dropdownLinkUrl + "/" + item.title,
            //   "IN DROPDOWN"
            // );
            dropdownLinkUrl =
              dropdownLinkUrl +
              "/" +
              item.title +
              "/" +
              Object.keys(item.versions[item.versions.length - 1])[0] +
              "/" +
              item.versions[item.versions.length - 1][
                Object.keys(item.versions[item.versions.length - 1])[0]
              ].sidebar[0].pages[0].id;
            // firstItem.versions[0][selectedVersion[0]].sidebar[0].pages[0].id;
          }
        }
      }
    });
  };
  // getFirstVersionItem();
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const setPath = (version: any) => {
    // console.log(version);
    getFirstVersionItem(version);
    // console.log(dropdownLinkUrl);
    router.push(dropdownLinkUrl);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleDropDown}
        >
          {selectedVersion}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={
          isOpen
            ? "absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            : "absolute hidden right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        }
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        // tabindex="-1"
      >
        <div className="py-1" role="none">
          {versions.map((item: any, index: any) => {
            return (
              <div className="px-1 py-1 " key={index}>
                <button
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  // tabindex="-1"
                  id="menu-item-0"
                  onClick={() => {
                    setVersion(Object.keys(item)[0]);
                    setOpen(false);
                    setPath(Object.keys(item)[0]);
                  }}
                >
                  {Object.keys(item)[0]}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
