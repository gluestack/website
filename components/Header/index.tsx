import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Logo from "./Logo";
import Button from "../Button";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import Modal from "../modal";
import SearchBar from "./SearchBar";
import React from "react";
import Toggle from "./Toggle";

export const Header = ({ noAccess }: any) => {
  const [expand, setExpand] = useState(false);
  const [showModel, setModel] = useState(false);

  useEffect(() => {
    if (expand) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [expand]);

  return (
    <nav className="bg-white fixed w-full z-20 top-0">
      <div className=" dark:bg-black lg:py-6 py-4">
        <div className="container ">
          <div className="flex items-center justify-between">
            <Logo />
           
          

            <div className="flex order-last md:order-2 block md:hidden">
              <Modal
                height="3/6"
                isVisible={showModel}
                onClose={() => setModel(false)}
              >
                <SearchBar />
              </Modal>
              {/* <div className="hidden lg:block">
                    <Button link="/docs">DOCUMENTATION</Button>
                  </div> */}
              <Hamburger setExpand={setExpand} expand={expand} />
            </div>
            <Menu expand={expand} />

            <div className="flex items-center lg:gap-6">
              <Toggle />
              {!noAccess && (
                <div className="lg:block hidden">
                  <Button type="primary" dataId="QWcoG0YF">
                    Get early access
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
