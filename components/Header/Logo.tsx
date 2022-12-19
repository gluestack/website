import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/images/logo/lightLogo.svg";
import logodark from "/public/images/logo/darkLogo.svg";


function Logo({dark}: any) {
  return (
    <>
      <Link href="/" passHref legacyBehavior>
        <a className="inline-flex items-center">
          <Image
            className=""
            src={dark ? logodark : logo}
            alt="gluestack"
            width={200}
            height={100}
          />
        </a>
      </Link>
    </>
  );
}

export default Logo;
