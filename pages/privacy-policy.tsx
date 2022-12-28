import React, { Children } from "react";
import Layout from "../Layout/Layout";
import InerBanner from "../components/InerBanner";
import { PrivacyService } from "../services";
import ReactMarkdown from "react-markdown";

function Privacy({privacy}:any) {
  return (
    <Layout pageTitle={"Privacy Policy - gluestack"}>
      <InerBanner title="Privacy" last=" Policy" />
      <div className="container relative z-10 pb-14">
      <div className="py-12 prose lg:prose-lg sm-container dark:prose-invert markdownview">
            <ReactMarkdown children={privacy.description }></ReactMarkdown>
          </div>
      </div>
    </Layout>
  );
}

export default Privacy;

export async function getServerSideProps() {
  let privacy;

  try {
    const { data } = await PrivacyService();
    const content = data.privacyPolicy.data?.attributes;
    privacy = content;
  } catch (error) {}

  return {
    props: {
      privacy: privacy || null,
    },
  };
}