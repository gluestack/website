import React from "react";
import Blog from "../../components/Blog/Blog";

function Blogs({ blogs }: any) {
  return (
    <>
      <section className="container mx-auto ">
        <div className="grid gap-8 bg-white lg:grid-cols-1">
          {blogs.map((ele: any) => {
            let coverImg = ele.attributes.coverImg.data.attributes.url;
            console.log(coverImg);

            let autherName = ele.attributes.blog_author.data.attributes.name;
            let caregory= ele.attributes.blog_categories.data[0].attributes.name;

            return (
              <Blog
                title={ele.attributes.title}
                shortDes={ele.attributes.shortDes}
                coverImg={coverImg || ""}
                publish_date={ele.attributes.publish_date}
                autherName={autherName}
                blogTag={''}
                slug={ele.attributes.slug}
                caregory={caregory}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Blogs;
