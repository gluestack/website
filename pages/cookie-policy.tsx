import React, { Children } from "react";
import Layout from "../Layout/Layout";
import InerBanner from "../components/InerBanner";
import ReactMarkdown from "react-markdown";
import { CookieService } from "../services";

function Cookies({ cookie }: any) {
  return (
    <Layout title={"Cookie Policy - gluestack"}>
      <InerBanner title="Cookie" last=" Policy" />
      <div className="container relative z-10 pb-14">
        <div className="py-12 prose lg:prose-lg sm-container dark:prose-invert markdownview">
          <ReactMarkdown children={cookie.description}></ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
}

export default Cookies;

export async function getServerSideProps() {
  let cookie;

  try {
    const { data } = await CookieService();
    const content = data.cookiePolicy.data?.attributes;
    cookie = content;
  } catch (error) {}

  return {
    props: {
      cookie: cookie || null,
    },
  };
}
