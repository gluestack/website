import React, { useState } from "react";
import { Content } from '../components/docs/Content'
import ContentHeader from "../components/docs/ContentHeader";
import { useRouter } from "next/router";
import { IFrameContent } from "../components/docs/IFrameContent";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../components/Header/Logo";
import SidebarCustom from "../components/docs/SidebarCustom";
import Meta from "../components/Meta";


function PagesLayout(props: any) {
  const [sideBarOpen, setSideBar] = useState(false);
  const hamburgerClick = () => setSideBar(!sideBarOpen);
  
  const router = useRouter();
  return (
    <>
          <Meta title="gluestack - docs" description={props.description} ogImgUrl={props.ogImgUrl} ogUrl={props.ogUrl} />

    <div
      className={
        "flex flex-1 min-h-screen relative layout-theme " +
        (router.route == "/docs/1.x/gluestack-ui" ? "fixed" : "")
      }
    >
      <div className="flex w-full min-h-full flex-col">
        <div
          className={
            "md:hidden mobile-header flex flex-row justify-between" +
            (sideBarOpen ? " shadow-md" : "")
          }
        >
          <div className="w-[110px]">
            <Logo />
          </div>
          <div onClick={hamburgerClick} className="ease-in-out transition-2">
            {sideBarOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
        {/* <div className="w-1/5"> */}

        <div className="flex w-full min-h-full full-doc-content">
          <div
            className={
              "sidebarNav " +
              (sideBarOpen ? "showNav" : "hideNav") +
              " left-" +
              (sideBarOpen ? "[-100%]" : "0")
            }
          >
            <SidebarCustom
              {...props.versionInfo[props.version]}
              version={props.version}
              showBackButton={props.showBackButton}
            />
          </div>

          {router.route.includes("storybook") ? (
            <IFrameContent {...props} />
          ) : (
            <div className="content-holder flex flex-1 flex-col">
              <ContentHeader />
              <div className="content flex-1 h-full prose dark:text-white docs-layout">
                <Content {...props} />
              </div>
            </div>
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default PagesLayout;
