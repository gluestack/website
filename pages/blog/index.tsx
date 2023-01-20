import Blogs from "../../section/Blog";
import HeroSection from "../../section/Blog/HeroSection";
import { BlogService } from "../../services";
import Layout from "../../Layout/Layout";
import { useRouter } from "next/router";

import React, { useEffect } from "react";
import useAuthHook from "../../auth-context/use-auth-hook";

function Blog({ blogs }: any) {
  const [user, isLoading] = useAuthHook();
  const router = useRouter() as any;

  // useEffect(() => {
  //   if (!isLoading) {
  //     if (!user) {
  //       router.push("/");
  //     }
  //   }
  // }, [isLoading]);

  // if (isLoading) {
  //   return <></>;
  // }

  // if (user) {
    return (
      <Layout
        pageTitle={"Articles and Insights - gluestack"}
        description={
          "Curated ideas, experiments, and the latest developments in gluestack."
        }
      >
        <HeroSection />
        <div className="container relative z-10">
          <div className="sm-container pb-32">
            <Blogs blogs={blogs} />
          </div>
        </div>
      </Layout>
    );
  // }

  return <></>;
}

export default Blog;

export async function getServerSideProps() {
  let blogs;

  try {
    const { data } = await BlogService();
    const content = data.blogs.data;
    blogs = content;
  } catch (error) {}

  return {
    props: {
      blogs: blogs,
    },
  };
}
