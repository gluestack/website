import Blogs from "../../section/Blog/Blogs";
import HeroSection from "../../section/Blog/HeroSection";
import { BlogService } from "../../services";
import Layout from "../../Layout/Layout";

function Blog({ blogs }: any) {
  console.log(blogs, "++");

  return (
    <Layout>
      <HeroSection />
      <Blogs blogs={blogs} />
    </Layout>
  );
}

export default Blog;

export async function getServerSideProps() {
  let blogs;

  try {
    const { data } = await BlogService();
    const content = data.blogs.data;
    blogs = content;
    console.log(blogs, "qqq");
  } catch (error) {}

  return {
    props: {
      blogs: blogs,
    },
  };
}
