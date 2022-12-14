import React from "react";
import Linktag from "../elements/Linktag";

function Breadcrumb(props: any) {
  function isLast(index: any) {
    return index === props.crumbs.length - 1;
  }
  return (
    <>
      <div className="breadcrumb">
        <ul className="flex items-center">
          <li className="crumbList">
            <Linktag href="/" style="text-gray-600 hover:text-primary">
              <svg
                className="w-5 h-auto mx-2 text-gray-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
              </svg>
            </Linktag>

            <svg
              className="w-5 h-auto mx-2 text-gray-400 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </li>
          {props.crumbs.map((crumb: any, ci: any) => {
            const disabled = isLast(ci)
              ? " cursor-not-allowed hover:text-gray-600 "
              : "";
            return (
              <>
                <li key={ci} className="crumbList">
                  <Linktag href="" style="text-gray-600 hover:text-primary">
                    {crumb}
                  </Linktag>

                  <svg
                    className={`w-5 h-auto mx-2 text-gray-400 fill-current ${
                      disabled ? "hidden" : "block"
                    }  `}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                  </svg>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Breadcrumb;
