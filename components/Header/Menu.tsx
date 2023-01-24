import React from "react";
import Linktag from "../../elements/Linktag";
import Button from "../Button";

function Menu({ expand }: any) {
  return (
    <>
      <div className={`${expand ? "h-[50em] absolute top-[50px] left-0 bg-white w-full" : ` h-0 md:h-auto `}  nav-list `}>
        <ul className="nav-list-ul">
          <li className="item">
            <Linktag href="/" style="linkstyle font-light">
            Hosting
            </Linktag>
          </li>
          <li className="item">
            <div className="flex items-center">
              <Linktag href="/" style="linkstyle font-light">
                Design System
              </Linktag>
              <div className="text-xs  px-2 py-0.5 bg-primary rounded-[4px] text-white ml-1">
                Soon
              </div>
            </div>
          </li>
          {/* <li className="hidden md:block">
            <Linktag href="/blog" style="linkstyle">
            Blogs
            </Linktag>
          </li> */}
          <li className="item">
            <Linktag href="/blog" style="linkstyle font-light">
            Blogs
            </Linktag>
          </li>
          <li className="item">
            <Linktag href="/" style="linkstyle font-light">
            Contact Us
            </Linktag>
          </li>
          <li  className={`${expand ? "block" : "hidden"} item-btn`}>
            <div>
              <Button size="xl">DOCUMENTATION</Button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
