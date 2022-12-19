import React from "react";
import Linktag from "../../elements/Linktag";

function LinkList({children,link, style,target}:any) {
  return (
      <li className={`${style}`}>
        <Linktag  size="xs transition-colors" href={`${link ? link : '#'}`} target={target}>
          {children}
        </Linktag>
      </li>
  );
}

export default LinkList;
