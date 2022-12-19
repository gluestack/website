import React from "react";
import { fetchAPI } from "../../lib/api";
import SingleBlog from "../../section/Blog/SingleBlog";
import Layout from "../../Layout/Layout";
import { useRouter } from "next/router";

function Blog({
  blogData,
  author,
  categories,
  tags,
  nextblog,
  previousblog,
}: any) {
  const router = useRouter();
  const pageTitle = (str: string) => {
    return str.charAt(1).toUpperCase() + str.slice(2);
  };
  return (
    <Layout ogUrl={router.asPath} title={blogData.attributes.title} description={blogData.attributes.shortDes} ogImgUrl={blogData.attributes.coverImg.data.attributes.url}>
      <SingleBlog
        blog={blogData.attributes}
        author={author}
        categories={categories}
        tags={tags}
        nextblog={nextblog}
        previousblog={previousblog}
      />
    </Layout>
  );
}

export default Blog;
export async function getServerSideProps(context: any) {
  let param = context.params;

  let author, categories, tags, nextblog, id, blogsData, previousblog;
  try {
    const data = await fetchAPI("blogs?filters[slug][$eq]", param);
    const content = data.data[0];
    blogsData = content;
    author = content.attributes.blog_author.data;
    console.log(author,"++");
    
    categories = content.attributes.blog_categories.data;
    tags = content.attributes.blog_tags.data;
    id = content.id + 1;
  } catch (error) {}

  let nextId = { slug: id };

  try {
    const nextPost = await fetchAPI("blogs?filters[id][$eq]", nextId);
    const content = nextPost.data[0]?.attributes;
    nextblog = content;
  } catch (error) {}

  let prevId = { slug: id - 2 };

  try {
    if (id >= 2) {
      const previous = await fetchAPI("blogs?filters[id][$eq]", prevId);
      const content = previous.data[0]?.attributes;
      previousblog = content;
    }
  } catch (error) {}

  return {
    props: {
      blogData: blogsData || {},
      author: author || {},
      categories: categories || [],
      tags: tags || [],
      nextblog: nextblog || {},
      previousblog: previousblog || {},
    },
  };
}
