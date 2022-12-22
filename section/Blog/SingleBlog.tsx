import React from "react";
import Image from "next/image";
import Text from "../../elements/Text";
import BlogControl from "../../components/Blog/BlogControl";
import Tags from "../../components/Tags";
import { formatDate } from "../../Hooks/FormatDate";
import InerBanner from "../../components/InerBanner";
import Author from "../../components/Author";
import ReactMarkdown from "react-markdown";
function SingleBlog({
  blog,
  author,
  categories,
  tags,
  nextblog,
  previousblog,
  altText,
  
}: any) {
  return (
    <>
      <div className="mt-16">
        <InerBanner
          title={blog.title || "null"}
          paddingBottom
          single={true}
          style="test"
        />
      </div>
      <div className="container mx-auto">
        <div className="sm-container">
          <div className="flex items-center justify-around pt-4 pb-20 lg:justify-between">
            <div className="flex flex-col flex-wrap p-2 space-x-4 lg:justify-between md:flex-row">
              <Author
                src={author.image.data?.attributes.url}
                altText={author.altText}
                name={author.name}
              />
              <span className="items-center hidden px-2 lg:flex dark:text-white">|</span>
              <div className="flex justify-around p-2">
                <Text size="sm">{formatDate(blog.publish_date)}</Text>
              </div>
              {categories.map((data: any, index: number) => (
                <Tags solid key={index}>
                  {data.attributes.name}
                </Tags>
              ))}
            </div>
          </div>
          <div className="flex justify-center relative h-[400px] w-full">
            <Image
              src={blog.coverImg.data.attributes.url}
              alt={altText || "Cover Image"}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="py-16 prose lg:prose-xl sm-container  dark:prose-invert ">
            {/* <div dangerouslySetInnerHTML={{ __html: blog.details }}></div> */}
            <ReactMarkdown children={blog.details}></ReactMarkdown>
          </div>

          <div className="items-center md:flex ">
            <div className="p-2">
              <Text size="lg" style="font-bold ">
                Tags
              </Text>
            </div>

            <div className="flex flex-wrap text-center">
              {tags.map((data: any, index: number) => (
                 <Tags key={index}>
                  {data.attributes.name}
                </Tags>
              ))}
            </div>
          </div>
          <div className="grid items-center justify-start grid-cols-1 gap-8 py-20 md:grid-cols-2">
            {previousblog.title && (
              <BlogControl
                right
                src={previousblog.coverImg.data?.attributes.url || null}
                arrowTitle="Previous Post"
                blogTitle={previousblog.title || "X"}
                href={previousblog.slug || "null"}
              />
            )}
            {nextblog.title && (
              <BlogControl
                left
                src={nextblog.coverImg.data?.attributes.url || null}
                arrowTitle="Next Post"
                blogTitle={nextblog.title || "No Blogs"}
                href={nextblog.slug || "null"}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
