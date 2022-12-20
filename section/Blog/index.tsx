import React from "react";
import Blog from "../../components/Blog";

function Blogs({ blogs }: any) {
  return (
    <>
      <section className="container ">
        <div className="grid gap-8 bg-white lg:grid-cols-1">
          {blogs.map((ele: any, index: any) => {
            let coverImg = ele.attributes.coverImg.data?.attributes.url;
            let autherName = ele.attributes.blog_author.data?.attributes.name;
            let autherImage=ele.attributes.blog_author.data?.attributes.image.data.attributes.url
            let caregory= ele.attributes.blog_categories.data[0]?.attributes.name;
            return (
              <>
              <Blog
                title={ele.attributes.title}
                shortDes={ele.attributes.shortDes}
                coverImg={coverImg || ""}
                publish_date={ele.attributes.publish_date}
                autherName={autherName}
                autherImage={autherImage}
                blogTag={''}
                slug={ele.attributes.slug}
                caregory={caregory}
                key={index}
              />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Blogs;
