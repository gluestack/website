import React from "react";
import Card from "../../components/Card";

function Blog({
  title,
  shortDes,
  coverImg,
  publish_date,
  autherName,
  category,
  autherImage,
  altText,
  slug,
}: any) {
  return (
    <Card
      title={title}
      description={shortDes}
      autherImage={autherImage}
      type="author"
      publish_date={publish_date}
      category={category}
      autherName={autherName}
      src={coverImg}
      link={`blog/${slug}`}
    />
  );
}

export default Blog;
