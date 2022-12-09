import React, { Children, useState } from "react";
import Link from "next/link";
const Linktag = ({ href, text, children,isDropdown }: any) => {
  const [open, setOpen] = useState(false);
  return (
   <>
   {!isDropdown ?  <Link href={href} legacyBehavior>
   <a className={`hover:text-primary text-base`}>
     {text}
     {children}
   </a>
 </Link>
: 
<div>

<div >
<button onClick={()=>setOpen(!open)} className={`hover:text-primary text-md`}>
  {text}
  {children}
</button>
</div>
 {open && <ul className="bg-red-900 menu">
          <li className="menu-item">
            <button>Menu 1</button>
          </li>
          <li className="menu-item">
            <button>Menu 2</button>
          </li>
        </ul>}
</div>

}
</>
  );
};

export default Linktag;
