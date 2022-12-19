import Blogs from "../../section/Blog";
import HeroSection from "../../section/Blog/HeroSection";
import { BlogService } from "../../services";
import Layout from "../../Layout/Layout";

function Blog({ blogs }: any) {
  return (
    <Layout title={'Blog'} description={"Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work,"}>
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
  } catch (error) {}

  return {
    props: {
      blogs: blogs,
    },
  };
}
