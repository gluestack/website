import { useState } from "react";
import Logo from "./Logo";
import Button from "../Button";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import Modal from "../modal/Modal";
import SearchBar from "./SearchBar";

export const Header = () => {
  const [expand, setExpand] = useState(false);
  const [showModel, setModel] = useState(false);
  return (
    <>
      <nav className={`nav`}>
        <div className="inner-nav">
          <Logo />
          <div className="flex md:order-2">
            <div
              onClick={() => setModel(!showModel)}
              className="mt-2 cursor-pointer"
            >
              {/* // Search Icon Working pending */}
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <Modal height="3/6" isVisible={showModel} onClose={() => setModel(false)}>
              <SearchBar />
            </Modal>
            <div className="hidden lg:block">
              <Button>DOCUMENTATION</Button>
            </div>
            <Hamburger setExpand={setExpand} expand={expand} />
          </div>
          <Menu expand={expand} />
        </div>
      </nav>
    </>
  );
};
