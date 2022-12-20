import React from "react";
import { Content } from "./components/Content";
import ContentHeader from "./components/ContentHeader";
import { useRouter } from "next/router";
import { IFrameContent } from "./components/IFrameContent";
import SidebarCustom from "./components/SidebarCustom";

function PagesLayout(props: any) {
  const router = useRouter();
  return (
    <div className="flex flex-1 min-h-screen relative layout-theme">
      <div className="flex w-full min-h-full">
        {/* <div className="w-1/5"> */}
        <SidebarCustom
          {...props.versionInfo[props.version]}
          version={props.version}
          showBackButton={props.showBackButton}
        />
        {/* </div> */}
        {/* <Sidebar
          versions={versions}
          // {...props.versionInfo[props.version]}
          // version={props.version}
        /> */}
        {/* <div className="w-4/5"> */}
        {router.route.includes("storybook") ? (
          <IFrameContent {...props} />
        ) : (
          <div className="content-holder flex flex-1 flex-col">
            <ContentHeader />
            <div className="flex-1 h-full prose">
              <Content {...props} />
            </div>
          </div>
        )}
        {/* </div> */}
      </div>
    </div>
  );
}

export default PagesLayout;
