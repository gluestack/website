import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Content } from "./components/Content";
import { Header } from "../components/Header";
import { versions } from "../versions.json";
import SidebarLatest from "./components/SidebarLatest";
import ContentHeader from "./components/ContentHeader";
import { useRouter } from "next/router";
import { IFrameContent } from "./components/IFrameContent";

function PagesLayout(props: any) {
  const router = useRouter();
  console.log(router.route);
  return (
    <div className={"flex flex-1 min-h-screen relative layout-theme " + (router.route == '/docs/1.x/gluestack-ui' ? 'fixed' : '')}>
      {/* Add 'fixed' class beside 'layout-theme' to have fixed layout */}
      {/* <Navbar
        setVersion={props.setVersion}
        version={props.version}
        versionsData={props.versionsData}
      /> */}
      {/* <Header /> */}
      <div className="flex w-full min-h-full full-doc-content">
        <SidebarLatest versions={versions} />
        {/* <Sidebar
          versions={versions}
          // {...props.versionInfo[props.version]}
          // version={props.version}
        /> */}

        {router.route == "/docs/1.x/gluestack-ui" ? (
          <IFrameContent {...props} />
        ) : (
          <div className="content-holder flex flex-1 flex-col">
            <ContentHeader />
            <div className="flex-1 h-full prose lg:prose-xl">
              <Content {...props} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PagesLayout;
