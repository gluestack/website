import React from "react";
import LinkList from "./LinkList";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Social() {
  return (
    <ul className="text-white-200 font-md flex gap-4">
      <LinkList src="">
        <FaTwitter />
      </LinkList>
      <LinkList src="">
        <FaLinkedin />
      </LinkList>
      <LinkList src="">
        <FaInstagram />
      </LinkList>
      <LinkList src="">
        <FaFacebook />
      </LinkList>
    </ul>
  );
}

export default Social;
