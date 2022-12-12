import React, { Children } from "react";
import Link from "next/link";

function Button({
  text,
  isSecondary,
  sm,
  lg,
  xl,
  link,
  onClick,
  children,
}: any) {
  return (
    <>
      <Link href={`${link}`} prefetch={false} legacyBehavior>
        <a className="btn_outline group">
          <span
            className={`btn${
              isSecondary
                ? " text-white  bg-primary ring-1 ring-primary-100  ring-offset-primary-100 "
                : " text-primary  bg-white ring-1 ring-primary-100 "
            } ${
              sm
                ? "text-sm px-2 py-2"
                : lg
                ? "px-8 py-2"
                : xl
                ? "px-[70px] py-2 md:px-[50px]  font-bold"
                : "lg:px-4 lg:py-2 px-12 py-2  text-sm"
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