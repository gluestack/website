import React from "react";
import Linktag from "../../elements/Linktag";

function LinkList({title,link}:any) {
  return (
    <>
      <li>
        <Linktag  size="xs transition-colors" href={`${link ? link : '#'}`}>
          {title}
        </Linktag>
      </li>
    </>
  );
}

export default LinkList;
