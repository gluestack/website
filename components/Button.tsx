import React, { Children } from "react";
import Link from "next/link";



function Button({ type, size , link, white, children, dataId }: any) {
  return (
    <>
      {link ? (
        <Link href={`${link}`} prefetch={false} className="btn_outline group">
              <ButtonSpan children={children} type={type} size={size} />
        </Link>
      ) : 
      white ? (
        <button className="outline_white group" data-tf-popup={dataId}>
            <ButtonSpan children={children} type={type} size={size} />
        </button>
      ) : (
        <button className="btn_outline group" data-tf-popup={dataId}>
            <ButtonSpan children={children} type={type} size={size} />
        </button>
      )}
    </>
  );
}

export default Button;

const ButtonSpan = ({ children, type, size }: any) => {
  return (
    
      <span
          className={`btn ${
            (type == 'primary')
              ? "text-white  bg-primary  ring-primary  ring-offset-primary "
              : (type == 'tertiary')  
              ? "text-white  bg-skyBlue  ring-skyBlue  ring-offset-skyBlue "
              :(type == 'normal')
              ? "text-black bg-white ring-white ring-offset-white"
              : "text-primary  bg-white ring-primary "
          } ${
              (size == 'sm')
              ? "text-sm px-2 py-2"
              : (size == 'lg')
              ? "px-8 py-2"
              : (size == 'xl')
              ? "px-[70px] py-2 md:px-[50px] "
              : (size == 'xxl') 
              ? "lg:px-20  px-8 py-2  lg:text-lg text-sm"
              : "lg:px-6 lg:py-2 px-12 py-2  text-base"
          }
          `}
          >
          {children}
        </span>
    
  );
};



