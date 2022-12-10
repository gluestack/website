import React from "react";

function Hamburger({ setExpand, expand }: any) {
  return (
    <>
      <button
        onClick={() => setExpand(!expand)}
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="hide-btn"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {expand ? (
          <svg
            x-show="navIsOpen"
            className="absolute inset-0 mt-2.5 ml-2.5 w-5"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="1.41406"
              width="2"
              height="24"
              transform="rotate(-45 0 1.41406)"
              fill="currentColor"
            ></rect>
            <rect
              width="2"
              height="24"
              transform="matrix(0.707107 0.707107 0.707107 -0.707107 0.192383 16.9707)"
              fill="currentColor"
            ></rect>
          </svg>
        ) : (
          <svg
            x-show="! navIsOpen"
            className="w-16"
            viewBox="0 0 28 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="1"
              x2="28"
              y2="1"
              stroke="currentColor"
              strokeWidth="2"
            ></line>
            <line
              y1="11"
              x2="28"
              y2="11"
              stroke="currentColor"
              strokeWidth="2"
            ></line>
          </svg>
        )}
      </button>
    </>
  );
}

export default Hamburger;
