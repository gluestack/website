import React from "react";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../Layout/Layout"), { ssr: true });
const InerBanner = dynamic(() => import("../components/InerBanner"), {
  ssr: true,
});
const Disclaimer = dynamic(() => import("../components/Disclaimer"), {
  ssr: true,
});

import { TermService } from "../services";
import ReactMarkdown from "react-markdown";

function term({ term }: any) {
  //If need to set Title from backend put word[0]  in title word[1]in last
  // let word= term.title.split(" ")

  return (
    <Layout pageTitle={"Terms & Condition - gluestack"}>
      <Disclaimer title={term.disclaimer} />

      <div className="relative z-10">
        <InerBanner title="Terms &" last="Conditions" />
        <div className="container relative z-10 pb-14">
          <div className="py-12 prose lg:prose-lg sm-container dark:prose-invert markdownview">
            <ReactMarkdown>{term.description}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default term;

export async function getServerSideProps() {
  let term;

  try {
    const { data } = await TermService();
    const content = data.term.data?.attributes;
    term = content;
  } catch (error) {}

  return {
    props: {
      term: term || null,
    },
  };
}
