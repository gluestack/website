import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function ContentHeader(props: any) {
  return (
    <>
      {/* Navbar */}
      <nav className="top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center">
        <div className="px-20 w-full pt-12">
          <div className="flex row ">
            <SearchInput />
            <Dropdown />

            <ColorModeIcon />
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}

function ColorModeIcon() {
  return (
    <div className="mb-3 border-b hover:cursor-pointer">
      <svg
        enable-background="new 0 0 512 512"
        height="36"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="36"
        opacity={0.7}
      >
        <g>
          <g>
            <path
              d="M256,144c-61.75,0-112,50.25-112,112s50.25,112,112,112s112-50.25,112-112S317.75,144,256,144z M256,336    c-44.188,0-80-35.812-80-80c0-44.188,35.812-80,80-80c44.188,0,80,35.812,80,80C336,300.188,300.188,336,256,336z M256,112    c8.833,0,16-7.167,16-16V64c0-8.833-7.167-16-16-16s-16,7.167-16,16v32C240,104.833,247.167,112,256,112z M256,400    c-8.833,0-16,7.167-16,16v32c0,8.833,7.167,16,16,16s16-7.167,16-16v-32C272,407.167,264.833,400,256,400z M380.438,154.167    l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625s-16.375-6.25-22.625,0l-22.625,22.625c-6.25,6.25-6.25,16.375,0,22.625    S374.188,160.417,380.438,154.167z M131.562,357.834l-22.625,22.625c-6.25,6.249-6.25,16.374,0,22.624s16.375,6.25,22.625,0    l22.625-22.624c6.25-6.271,6.25-16.376,0-22.625C147.938,351.583,137.812,351.562,131.562,357.834z M112,256    c0-8.833-7.167-16-16-16H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h32C104.833,272,112,264.833,112,256z M448,240h-32    c-8.833,0-16,7.167-16,16s7.167,16,16,16h32c8.833,0,16-7.167,16-16S456.833,240,448,240z M131.541,154.167    c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625,0    c-6.25,6.25-6.25,16.375,0,22.625L131.541,154.167z M380.459,357.812c-6.271-6.25-16.376-6.25-22.625,0    c-6.251,6.25-6.271,16.375,0,22.625l22.625,22.625c6.249,6.25,16.374,6.25,22.624,0s6.25-16.375,0-22.625L380.459,357.812z"
              fill=""
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Dropdown() {
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="-mt-4 relative inline-block text-left ">
        <div className="mt-[1.5px]">
          <button
            type="button"
            className="inline-flex px-10 pb-2 w-full border-b block justify-center px-4 text-xs font-medium text-gray-700 "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={handleDropDown}
          >
            <div>
              <div className=" text-gray-400 text-xs mb-2">VERSIONS</div>
              <div className="flex text-sm">
                1.x
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 48 48"
                  width="22"
                  className="ml-4"
                >
                  <path d="M14 20l10 10 10-10z" />
                  <path d="M0 0h48v48h-48z" fill="none" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        <div
          className={
            isOpen
              ? "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              : "absolute hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          }
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-0"
            >
              Account settings
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-1"
            >
              Support
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-2"
            >
              License
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                id="menu-item-3"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function SearchInput() {
  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-3">
      <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 border-transparent ">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="Placeholder"
        className="px-3 py-3 relative text-sm border-b  w-full pl-10 text-sm placeholder-gray-700 text-gray-700 block w-full p-2.5 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:ring-0 focus:border-b"
      />
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      width="18"
      opacity={0.7}
      height="18"
      viewBox="0 0 122.879 119.799"
      enable-background="new 0 0 122.879 119.799"
    >
      <g>
        <path d="M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z" />
      </g>
    </svg>
  );
}
