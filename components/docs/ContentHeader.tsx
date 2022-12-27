import React, { useState } from "react";
import { useRouter } from "next/router";
import Toggle from "../../components/Header/Toggle";
import { AiOutlineSearch } from "react-icons/ai";

export default function ContentHeader(props: any) {
  return (
    <>
      {/* Navbar */}
      <nav className="top-0 md:top-[100px] left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center">
        <div className="px-10 md:px-20 w-full pt-2 md:pt-12">
          <div className="flex row ">
            <SearchInput />
            <Dropdown />
            <Toggle/>
            

          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
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
      <div className="-mt-4 relative inline-block text-left md:mr-[20px]">
        <div className="mt-[1.5px]">
          <button
            type="button"
            className="cursor-default inline-flex px-10 pb-2 w-full border-b border-gray-100 justify-center text-xs font-medium text-gray-700 "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            // onClick={handleDropDown}
          >
            <div>
              <div className=" text-gray-400 text-xs mb-2">VERSIONS</div>
              <div className="flex text-sm dark:text-white-300">
                1.x
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 48 48"
                  width="22"
                  className="ml-4"
                >
                  <path d="M14 20l10 10 10-10z" />
                  <path d="M0 0h48v48h-48z" fill="none" />
                </svg> */}
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
    <div className="relative flex w-full flex-wrap items-stretch ">
      <span className="z-10 h-full leading-snug font-normal absolute text-center text-black-400 dark:text-white-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 border-transparent">
        <AiOutlineSearch size={21}/>
      </span>
      <input
        type="text"
        placeholder=""
        className="px-3 py-3 relative text-sm border-b border-gray-100  w-full pl-10 text-sm placeholder-gray-700 text-gray-700 block w-full p-2.5 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:ring-0 focus:border-b dark:bg-black-200 dark:text-white-300"
      />
    </div>
  );
}

