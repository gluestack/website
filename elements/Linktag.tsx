import React, { Children, useState } from "react";
import Link from "next/link";
import Modal from "../components/modal/Modal";
import DropdownList from "../components/Header/DropdownList";
const Linktag = ({ href, text, children, isDropdown, style }: any) => {
  const [open, setOpen] = useState(false);
  const [showModel, setModel] = useState(true);
  return (
    <>
      {!isDropdown ? (
        <Link href={href} legacyBehavior>
          <a className={`hover:text-primary  ${style}`}>
            {text}
            {children}
          </a>
        </Link>
      ) : (
        <div>
          <div className="flex cursor-pointer">
            <a
              onClick={() => setOpen(!open)}
              className={`hover:text-primary text-md ${style}`}
            >
              {text}
              {children}
            </a>
            <span onClick={() => setOpen(!open)} className="mt-1.5 ml-2 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform ${
                  open ? "rotate-180" : ""
                } `}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </div>
          {open && (
            <DropdownList/>
          )}
        </div>
      )}
    </>
  );
};

export default Linktag;
