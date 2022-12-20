import Blogs from "../../section/Blog";
import HeroSection from "../../section/Blog/HeroSection";
import { BlogService } from "../../services";
import Layout from "../../Layout/Layout";

function Blog({ blogs }: any) {
  return (
    <Layout title={'Blog - gluestack'} description={"Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work,"}>
      <HeroSection />
      <div className="sm-container pb-32">

      <Blogs blogs={blogs} />
      </div>
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
