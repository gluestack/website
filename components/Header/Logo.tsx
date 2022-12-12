import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <>
      <Link href="/" passHref legacyBehavior>
        <a className="inline-flex items-center">
          <Image
            className=""
            src="/images/logo.png"
            alt="gluestack"
            width={140}
            height={100}
          />
        </a>
      </Link>
    </>
  );
}

export default Logo;
