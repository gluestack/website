import React from "react";
// @ts-ignore
import { Layout } from "@gluestack/docs-layout";
import { versions } from "../../versions.json";
import { useState } from "react";

export const Docs = () => {
  // const [version, setVersion]: any = useState(
  //   Object.keys(versions[versions.length - 1])
  // );

  // function getSidebarJsonData() {
  //   for (let i = 0; i < versions.length; i++) {
  //     if (Object.keys(versions[i])[0] == version) {
  //       return versions[i];
  //     }
  //   }
  // }
  // console.log("Loaded", version);
  return (
    // <Layout
    //   version={version}
    //   versionInfo={getSidebarJsonData()}
    //   setVersion={setVersion}
    //   versionsData={versions}
    // >
    <div>hihihi in docjknkjnkjs</div>
    // </Layout>
  );
};
export default Docs;
