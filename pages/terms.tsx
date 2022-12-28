import React from "react";
import Layout from "../Layout/Layout";
import InerBanner from "../components/InerBanner";
import Disclaimer from "../components/Disclaimer";
import { TermService } from "../services";
import ReactMarkdown from "react-markdown";

function term({ term }: any) {
  
  //If need to set Title from backend put word[0]  in title word[1]in last
    // let word= term.title.split(" ")
    
  return (
    <Layout pageTitle={"Terms & Condition - gluestack"}>
      <div className="relative z-10">
        <InerBanner title="Terms &" last="Conditions" />
        <div className="container relative z-10 pb-14">
          <div className="py-12 prose lg:prose-lg sm-container dark:prose-invert markdownview">
            <ReactMarkdown children={term.description}></ReactMarkdown>
          </div>
        </div>
      </div>
      <Disclaimer
        first="DISCLAIMER:"
        last="THE SERVICES BEING PROVIDED ARE PART OF A PREVIEW OR TEST VERSION AND ARE NOT INTENDED FOR USE IN A PRODUCTION OR LIVE ENVIRONMENT. GEEKYANTS INC. IS NOT LIABLE FOR ANY ISSUES THAT MAY ARISE FROM USING THE PREVIEW VERSION, WHICH MAY CONTAIN BUGS OR ERRORS. THE USER IS RESPONSIBLE FOR EVALUATING THE PREVIEW."
      />
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
