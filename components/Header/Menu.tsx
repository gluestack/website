import React from "react";
import Linktag from "../../elements/Linktag";
import Button from "../Button";

function Menu({ expand }: any) {
  return (
    <>
      <div className={`${expand ? "h-[50em]" : ` h-0 md:h-auto`}  nav-list`}>
        <ul className="nav-list-ul">
          <li className="item">
            <Linktag href="/car" style="linkstyle">
              Forge
            </Linktag>
          </li>
          <li className="item">
            <Linktag href="" style="linkstyle">
              Vapor
            </Linktag>
          </li>
          <li className="hidden md:block">
            <Linktag isDropdown style="font-thin ">
              Ecosystem
            </Linktag>
          </li>
          <li className="item">
            <Linktag href="" style="linkstyle">
              News
            </Linktag>
          </li>
          <li className="item">
            <Linktag href="" style="linkstyle">
              Partners
            </Linktag>
          </li>
          <li>
            <div className={`${expand ? "block" : "hidden"} item-btn`}>
              <Button xl>DOCUMENTATION</Button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
