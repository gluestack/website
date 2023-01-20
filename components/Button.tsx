import React from "react";
import Link from "next/link";

function Button({ type, size, link, white, children, dataId, lookLink }: any) {
  return (
    <>
      {link ? (
        <Link href={`${link}`} prefetch={false} className="btnWrapper group">
          <ButtonSpan type={type} size={size} >{children}</ButtonSpan>
        </Link>
      ) : (
        <button className={!lookLink ? `btnWrapper group  ${white ? ' border-white' : ' border-primary dark:border-primary-200'}`:''}  data-tf-popup={dataId}>
          <ButtonSpan type={type} size={size} lookLink={lookLink}>{children}</ButtonSpan>
        </button>
      )}
    </>
  );
}

export default Button;

const ButtonSpan = ({ children, type, size, lookLink }: any) => {
  return (
    <span
      className={lookLink ? 'font-display text-gray dark:text-gray tracking-wide text-sm' : `btn ${
        type == "primary"
          ? "text-white  bg-primary  dark:bg-primary-200 ring-primary dark:ring-primary-200 ring-offset-primary dark:ring-offset-primary-200"
          : type == "tertiary"
          ? "text-white  bg-skyBlue  ring-skyBlue  ring-offset-skyBlue "
          : type == 'secondary'
          ? "text-black bg-white ring-white ring-offset-white"
          : "text-primary  bg-white ring-primary dark:ring-primary-200 "
      } ${
        size == "sm"
          ? "text-sm px-2 py-2"
          : size == "lg"
          ? "px-8 py-2"
          : size == "xl"
          ? "px-[50px] py-2  "
          : size == "xxl"
          ? "lg:px-20 px-8  py-2 lg:text-lg text-md "
          : "px-6 py-2   text-base"
      }
          `}
    >
      {children}
    </span>
  );
};
