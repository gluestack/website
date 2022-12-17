import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Content } from "./components/Content";
import { Header } from "../components/Header";
import { versions } from "../versions.json";
import SidebarLatest from "./components/SidebarLatest";
import ContentHeader from "./components/ContentHeader";

function PagesLayout(props: any) {
  return (
    <div className="relative layout-theme ">
      {/* Add 'fixed' class beside 'layout-theme' to have fixed layout */}

      {/* <Navbar
        setVersion={props.setVersion}
        version={props.version}
        versionsData={props.versionsData}
      /> */}
      {/* <Header /> */}
      <div className="flex h-full row full-doc-content">
        <SidebarLatest versions={versions} />
        {/* <Sidebar
          versions={versions}
          // {...props.versionInfo[props.version]}
          // version={props.version}
        /> */}
        <div className="content-holder w-[100vw]">
          <ContentHeader />
          <Content {...props} />
        </div>
      </div>
    </div>
  );
}

export default PagesLayout;
