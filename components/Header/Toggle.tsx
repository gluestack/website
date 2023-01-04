

import Image from "next/image";
import React, { useContext,useState,useEffect } from "react";
import { AppContext } from "../../pages/_app";
import Dark from "../../public/images/dark.svg";
import Light from "../../public/images/light.svg";

function Toggle(): JSX.Element | null {
  //@ts-ignore
  const { darkMode } = useContext(AppContext);
  const value = darkMode?.value ?? "light";
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {value ? (
        <button onClick={() => darkMode.toggle()}>
          <Image
            src={Light}
            alt="Light mode"
            width={25}
          />
        </button>
      ) : (
        <button onClick={() => darkMode.toggle()}>
          <Image
            src={Dark}
            alt="Dark mode"
            width={25}
          />
        </button>
      )}
    </>
  );
}

export default Toggle;
