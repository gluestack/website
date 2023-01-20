import React from "react";
import Linktag from "../../elements/Linktag";
import Button from "../Button";

function Menu({ expand }: any) {
  return (
    <>
      <div className={`${expand ? "h-[50em]" : ` h-0 md:h-auto`}  nav-list`}>
        <ul className="nav-list-ul">
          <li className="item">
            <Linktag href="/" style="linkstyle font-light">
            Hosting
            </Linktag>
          </li>
          <li className="item">
            <Linktag href="/" style="linkstyle font-light">
            Design System
            </Linktag>
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
