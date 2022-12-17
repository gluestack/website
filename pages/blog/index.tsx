
import Blogs from '../../section/Blog/Blogs'
import HeroSection from "../../section/Blog/HeroSection";
import { BlogService } from '../../services';

function Blog({blogs}:any) {
  console.log(blogs,"++");
  
  return (
    <>
    <HeroSection/>
     <Blogs blogs={blogs}/>
    </>
  );
}

export default Blog;

export async function getServerSideProps() {
  let  blogs;

  try {
    const { data } = await BlogService();
    const content = data.blogs.data;
     blogs =content
    console.log(blogs);
    
  } catch (error) {}


  return {
    props: {
      blogs: blogs,
    },
  };
}

