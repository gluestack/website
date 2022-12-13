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

export const Dropdown = ({ selectedVersion, versions, setVersion }: any) => {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {selectedVersion}
          {/* <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> */}
          <svg
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </Menu.Button>
      </div>

      <Menu.Items className="absolute right-0 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {versions.map((item: any, index: any) => {
          return (
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button
                  onClick={() => {
                    setVersion(Object.keys(item)[0]);
                  }}
                >
                  {Object.keys(item)[0]}
                </button>
              </Menu.Item>
            </div>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
