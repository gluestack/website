import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import logo from "/public/images/logo/lightLogo.svg";
import logodark from "/public/images/logo/darkLogo.svg";
import { AppContext } from "../../pages/_app";

function Logo({ darkLogo }: any) {
  //@ts-ignore
  const { darkMode } = useContext(AppContext);
  const [isMounted, setIsMounted] = React.useState(false);
  const value = darkMode?.value ?? "dark";

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted)
    return (
      <div className="visibility-none">
        <Link href="/" passHref legacyBehavior>
          <a className="inline-flex items-center">
            {!value ? (
              <Image
                src={darkLogo ? logodark : logo}
                alt="gluestack"
                width={200}
                height={100}
              />
            ) : (
              <Image
                src={darkLogo ? logo : logodark}
                alt="gluestack"
                width={200}
                height={100}
              />
            )}
          </a>
        </Link>
      </div>
    );
  return (
    <>
      <Link href="/" passHref legacyBehavior>
        <a className="inline-flex items-center">
          {!value ? (
            <Image
              src={darkLogo ? logodark : logo}
              alt="gluestack"
              width={200}
              height={100}
            />
          ) : (
            <Image
              src={darkLogo ? logo : logodark}
              alt="gluestack"
              width={200}
              height={100}
            />
          )}
        </a>
      </Link>
    </>
  );
}

export default Logo;
