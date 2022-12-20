import Blogs from "../../section/Blog";
import HeroSection from "../../section/Blog/HeroSection";
import { BlogService } from "../../services";
import Layout from "../../Layout/Layout";

function Blog({ blogs }: any) {
  return (
    <Layout
      title={"Articles and Insights - gluestack"}
      description={
        "Curated ideas, experiments, and the latest developments in gluestack."
      }
    >
      <HeroSection />
      <div className="container">
        <div className="sm-container pb-32">
          <Blogs blogs={blogs} />
        </div>
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
