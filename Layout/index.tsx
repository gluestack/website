import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Content } from "./components/Content";
import { Header } from "../components/Header";
import { versions } from "../versions.json";

function PagesLayout(props: any) {
  // console.log(versions);
  return (
    <div className="relative  overflow-hidden">
      {/* <Navbar
        setVersion={props.setVersion}
        version={props.version}
        versionsData={props.versionsData}
      /> */}
      <Header />
      <div className="h-full w-full flex row ">
        <Sidebar
          versions={versions}
          // {...props.versionInfo[props.version]}
          // version={props.version}
        />
        <Content {...props} />
      </div>
    </div>
  );
}

export default PagesLayout;
