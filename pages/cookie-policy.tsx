import React, { Children } from "react";
import ReactMarkdown from "react-markdown";
import { CookieService } from "../services";
import dynamic from "next/dynamic";
const InerBanner = dynamic(() => import("../components/InerBanner"), {
  ssr: true,
});
const Layout = dynamic(() => import("../Layout/Layout"), {
  ssr: true,
});

function Cookies({ cookie }: any) {
  return (
    <Layout title={"Cookie Policy - gluestack"}>
      <InerBanner title="Cookie" last=" Policy" />
      <div className="container relative z-10 pb-14">
        <div className="py-12 prose lg:prose-lg sm-container dark:prose-invert markdownview">
          <ReactMarkdown>{cookie.description}</ReactMarkdown>
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
