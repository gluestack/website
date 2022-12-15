import React, { Children } from "react";
import Link from "next/link";

function Button({
  text,
  isSecondary,
  sm,
  lg,
  xl,
  xxl,
  link,
  onClick,
  data,
  children,
}: any) {
  return (
    <>
      <Link href={`${link}`} prefetch={false} legacyBehavior>
        <a className="btn_outline group" data-tf-popup={data} >
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
                ? "px-[70px] py-2 md:px-[50px]  font-bold"
                : xxl
                ? "lg:px-20 lg:py-2 px-2 py-2  text-sm lg:text-base"
                : "lg:px-6 lg:py-2 px-12 py-2  text-base"
            }
            `}
          >
            {children}
          </span>
        </a>
      </Link>
    </>
  );
}

export default Button;
