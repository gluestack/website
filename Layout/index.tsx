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
    <div className="flex flex-1 min-h-screen relative layout-theme">
      {/* Add 'fixed' class beside 'layout-theme' to have fixed layout */}
      {/* <Navbar
        setVersion={props.setVersion}
        version={props.version}
        versionsData={props.versionsData}
      /> */}
      {/* <Header /> */}
      <div className="flex w-full min-h-full full-doc-content">
        <SidebarLatest versions={versions} />

        <div className="content-holder w-[100vw]">
          <ContentHeader />
          <div className="prose lg:prose-xl">
            <Content {...props} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagesLayout;
