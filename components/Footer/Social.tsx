import React from "react";
import LinkList from "./LinkList";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Social() {
  return (
    <ul className="text-white-200 font-md flex gap-4">
      <LinkList link="https://twitter.com/gluestackio" target="_blank">
        <FaTwitter />
      </LinkList>
      <LinkList link="https://www.linkedin.com/company/gluestackio/" target="_blank">
        <FaLinkedin />
      </LinkList>
      <LinkList link="https://www.instagram.com/gluestackio/" target="_blank">
        <FaInstagram />
      </LinkList>
      <LinkList link="https://www.facebook.com/profile.php?id=100088472594571" target="_blank">
        <FaFacebook />
      </LinkList>
    </ul>
  );
}

export default Social;
