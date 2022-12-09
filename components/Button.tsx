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
        <a className="border border-primary group focus:outline-none lg:ml-4 lg:inline-flex">
          <span
            className={`btn${
              isSecondary
                ? " text-white  bg-primary ring-1 ring-primary  ring-offset-primary "
                : " text-primary  bg-white ring-1 ring-primary "
            } ${
              sm
                ? "text-sm px-2 py-2"
                : lg
                ? "px-8 py-2"
                : xl
                ? "px-12  font-bold"
                : "px-4 py-2 text-sm"
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
