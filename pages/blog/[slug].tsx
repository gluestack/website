import React from "react";
import { fetchAPI } from "../../lib/api";
import SingleBlog from "../../section/Blog/SingleBlog";

function Blog({ blogData, author, categories, tags }: any) {
  return (
    <>
      <SingleBlog
        blog={blogData.attributes}
        author={author}
        categories={categories}
        tags={tags}
      />
    </>
  );
}

export default Blog;
export async function getServerSideProps(context: any) {
  let param = context.params;

  let author, categories, tags;

  const data = await fetchAPI("blogs?filters[slug][$eq]", param);
  const content = data.data[0];
  author = content.attributes.blog_author.data.attributes;
  categories = content.attributes.blog_categories.data;
  tags = content.attributes.blog_tags.data;

  return {
    props: {
      blogData: content || {},
      author: author || {},
      categories: categories || [],
      tags: tags ? tags : [],
    },
  };
}
