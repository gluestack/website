import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/logo/lightLogo.svg"

function Logo() {
  return (
    <>
      <Link href="/" passHref legacyBehavior>
        <a className="inline-flex items-center">
          <Image
            className=""
            src={logo}
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
