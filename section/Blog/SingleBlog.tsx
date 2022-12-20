import React from "react";
import Image from "next/image";
import Heading from "../../elements/Heading";
import blog2 from "/public/blog/Rectangle 3467567bottomblog.svg";
import blog3 from "/public/blog/Rectangle 3467568bottom2blog.svg";
import Text from "../../elements/Text";
import TermsCondition from "../../components/Terms";
import BlogControl from "../../components/Blog/BlogControl";
import Tags from "../../components/Tags";
import { formatDate } from "../../Hooks/FormatDate";

function SingleBlog({
  blog,
  author,
  categories,
  tags,
  nextblog,
  previousblog,
  altText,
  autherImage
}: any) {
  console.log(author,"author");
  
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center">
          <Heading priority={1}>{blog.title || 'null'}</Heading>
        </div>
        <div className="flex items-center justify-between pt-4 pb-20">
          <div className="flex items-center space-x-4 ">
            <Image
              src={autherImage}
              className="rounded-full"
              width={40}
              height={50}
              alt={author.altText || 'Profile Image'}
            />
            <div className="flex">
              <Text size="sm">{author.name}</Text>
              <span className="px-2">|</span>
              <Text size="sm">{formatDate(blog.publish_date)}</Text>
            </div>
            {categories.map((ele: any, index: number) => (
              <Tags solid key={index}>
                {ele.attributes.name}
              </Tags>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={blog.coverImg.data.attributes.url}
            alt={altText || 'Cover Image'}
            width={1000}
            height={100}
          />
        </div>

        <TermsCondition title={blog.subHeading}>
          <div dangerouslySetInnerHTML={{ __html: blog.details }}></div>
        </TermsCondition>

        <div className="flex flex-col justify-around md:flex-row">
          <div className="p-2 lg:p-0">
            <Image src={blog2} alt={altText || 'subImage'}/>
          </div>
          <div className="p-2 lg:p-0">
            <Image src={blog3} alt={altText || 'subImage'} />
          </div>
        </div>
        <div className="items-center md:flex ">
          <div className="p-2">
            <Text size="lg" style="font-bold ">
              Tags
            </Text>
          </div>

          <ul className="flex flex-wrap pt-4 text-center">
            {tags.map((ele: any, index: number) => (
              <Tags key={index}>{ele.attributes.name}</Tags>
            ))}
          </ul>
        </div>
        <div className="grid items-center justify-start grid-cols-1 gap-8 py-20 md:grid-cols-2">
          <BlogControl
            right
            arrowTitle="Previous Post"
            blogTitle={previousblog.title|| "X"}
            href={previousblog.slug || "null"}
          />
          <BlogControl
            left
            arrowTitle="Next Post"
            blogTitle={nextblog.title || "No Blogs"}
            href={nextblog.slug || "null"}
          />
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
