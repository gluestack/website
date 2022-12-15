import React from "react";
import Linktag from "../../elements/Linktag";
import Button from "../Button";

function Menu({ expand }: any) {
  return (
    <>
      <div className={`${expand ? "h-[50em]" : ` h-0 md:h-auto`}  nav-list`}>
        <ul className="nav-list-ul">
          <li className="item">
            <Linktag href="/" style="linkstyle">
            Hosting
            </Linktag>
          </li>
          <li className="item">
            <Linktag href="/" style="linkstyle">
            Design System
            </Linktag>
          </li>
          {/* <li className="hidden md:block">
            <Linktag href="/" style="linkstyle">
            Blogs
            </Linktag>
          </li> */}
          <li className="item">
            <Linktag href="/" style="linkstyle">
            Blogs
            </Linktag>
          </li>
          <li className="item">
            <Linktag href="/" style="linkstyle">
            Contact Us
            </Linktag>
          </li>
          <li  className={`${expand ? "block" : "hidden"} item-btn`}>
            <div>
              <Button xl>DOCUMENTATION</Button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
