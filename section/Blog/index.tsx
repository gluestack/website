import React from "react";
import Blog from "../../components/Blog";

function Blogs({ blogs }: any) {
  return (
  
        <div className="grid gap-8 lg:grid-cols-1">
          {blogs.map((ele: any, index: any) => {
            let coverImg = ele.attributes.coverImg.data?.attributes.url;
            let autherName = ele.attributes.blog_author.data?.attributes.name;
            let autherImage=ele.attributes.blog_author.data?.attributes.image.data.attributes.url;
            let category= ele.attributes.blog_categories.data;
            
            return (
              <>
              <Blog
                title={ele.attributes.title}
                shortDes={ele.attributes.shortDes || ""}
                coverImg={coverImg || ""}
                publish_date={ele.attributes.publish_date}
                autherName={autherName}
                autherImage={autherImage || ""}
                blogTag={''}
                slug={ele.attributes.slug}
                category={category || []}
                key={index}
              />
              </>
            );
          })}
        </div>
    
  );
}

export default Blogs;
