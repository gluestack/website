import React from "react";
import Linktag from "../../elements/Linktag";

function LinkList({children,link, style}:any) {
  return (
      <li className={`${style}`}>
        <Linktag  size="xs transition-colors" href={`${link ? link : '#'}`}>
          {children}
        </Linktag>
      </li>
  );
}

export default LinkList;
