import React from "react";
import Image from "next/image";
import Text from "../../elements/Text";
import TermsCondition from "../../components/Terms";
import BlogControl from "../../components/Blog/BlogControl";
import Tags from "../../components/Tags";
import { formatDate } from "../../Hooks/FormatDate";
import InerBanner from "../../components/InerBanner";
import Author from "../../components/Author";
function SingleBlog({
  blog,
  author,
  categories,
  tags,
  nextblog,
  previousblog,
  altText,
  autherImage,
  autherName
}: any) {
  console.log(author,"authorName");
  
  return (
    <>
    <InerBanner title={blog.title || 'null'} paddingBottom />
      <div className="container mx-auto">
       
        <div className="flex items-center justify-between pt-4 pb-20">
          <div className="flex items-center space-x-4 ">
          <Author
                  src= {author.image?.data?.attributes.ur}
                  altText={author.altText}
                  name={author.name}
                />
                {/* {author.attributes.name}
                {author.attributes.altText}
                {author.attributes.image?.data?.attributes.url} */}

                

            {/* <Image
              src={autherImage}
              className="rounded-full"
             layout="fill"
              alt={author.altText || 'Profile Image'}
            /> */}
            <div className="flex">
              <span className="px-2">|</span>
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
            alt={altText || 'Cover Image'}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <TermsCondition title={blog.subHeading}>
          <div dangerouslySetInnerHTML={{ __html: blog.details }}></div>
        </TermsCondition>

        {/* <div className="flex flex-col justify-around md:flex-row">
          <div className="p-2 lg:p-0">
            <Image src={blog2} alt={altText || 'subImage'}/>
          </div>
          <div className="p-2 lg:p-0">
            <Image src={blog3} alt={altText || 'subImage'} />
          </div>
        </div> */}
        <div className="items-center md:flex ">
          <div className="p-2">
            <Text size="lg" style="font-bold ">
              Tags
            </Text>
          </div>

          <ul className="flex flex-wrap  text-center">
            {tags.map((data: any, index: number) => (
              <Tags key={index} outline>{data.attributes.name}</Tags>
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
