import React, { Children } from "react";
import Link from "next/link";

function Button({ isSecondary,tertiary, sm, lg, xl, xxl, link, children, dataId }: any) {
  return (
    <>
      {link ? (
        <Link href={`${link}`} prefetch={false} legacyBehavior>
          <a className="btn_outline group">
            <span
              className={`btn ${
                isSecondary
                  ? "text-white  bg-primary  ring-primary  ring-offset-primary "
                  : "text-primary  bg-white ring-primary "
              } ${
                sm
                  ? "text-sm px-2 py-2"
                  : lg
                  ? "px-8 py-2"
                  : xl
                  ? "px-[70px] py-2 md:px-[50px] "
                  : xxl
                  ? "lg:px-20  px-2 py-2  text-lg"
                  : "lg:px-6 lg:py-2 px-12 py-2  text-base"
              }
            `}
            >
              {children}
            </span>
          </a>
        </Link>
      ) : (
        <button className="btn_outline group" data-tf-popup={dataId}>
          <span
            className={`btn ${
              isSecondary
                ? "text-white  bg-primary  ring-primary  ring-offset-primary  "
                : tertiary 
                  ? "text-white  bg-skyBlue  ring-skyBlue  ring-offset-skyBlue "
                : "text-white  bg-white ring-primary "
            } ${
              sm
                ? "text-sm px-2 py-2"
                : lg
                ? "px-8 py-2"
                : xl
                ? "px-[70px] py-2 md:px-[50px]  "
                : xxl
                ? "lg:px-20  px-8 py-2  lg:text-lg text-sm"
                : "lg:px-6 lg:py-2 px-12 py-2  text-base"
            }
            `}
          >
            {children}
          </span>
        </button>
      )}
    </>
  );
}

export default Button;
