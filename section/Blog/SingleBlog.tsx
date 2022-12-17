import React from "react";
import Image from "next/image";
import Button from "../../components/Button";
import Heading from "../../elements/Heading";
import blog1 from "/public/blog/Rectangle 3467574singleblog.svg";
import blog2 from "/public/blog/Rectangle 3467567bottomblog.svg";
import blog3 from "/public/blog/Rectangle 3467568bottom2blog.svg";
import Text from "../../elements/Text";
import TermsCondition from "../../components/Terms/TermsCondition";
import Category from "../../components/Blog/Category";
import BlogControl from "../../components/Blog/BlogControl";
import Tags from "../../components/Tags";

function SingleBlog({ blog, author, categories, tags }: any) {
  let mainImg = blog.coverImg.data.attributes.url;
  console.log(blog, "+---");

  const blogPoints = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet con. Arcu tristique egestas sit pulvinar.",
      desc: "<p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p> <br/><p>Insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/><p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/><p>Insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p>",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet con. Arcu tristique egestas sit pulvinar.",
      desc: "<p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/><p>Insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p>",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet con. Arcu tristique egestas sit pulvinar.",
      desc: "<p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/><p>Insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/><p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/><p>Insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p>",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet con. Arcu tristique egestas sit pulvinar.",
      desc: "<p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/> <li>Digital design is like painting, except the paint never dries.</li>  <li>Creativity is only as obscure as your reference</li> <li>Whitespace is like air: it is necessary for design to breathe</li> <li>You don’t have to be ‘a creative’ to be creative. </li> <li>The best way to predict the future is to create it</li>",
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center">
          <Heading priority={1}>{blog.title}</Heading>
        </div>
        <div className="flex items-center justify-between pt-4 pb-20">
          <div className="flex items-center space-x-4 ">
            <Image
              src={
                "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              }
              className="rounded-full"
              width={40}
              height={50}
              alt={""}
            />
            <div className="flex">
              <Text size="sm">{author.name}</Text>
              <span className="px-2">|</span>
              <Text size="sm">{blog.publish_date}</Text>
            </div>
            {categories.map((ele: any, index: number) => (
              <Tags isTag key={index} tag={ele.attributes.name} />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Image src={mainImg} alt="image" width={1000} height={100} />
        </div>

        <TermsCondition title={blog.subHeading}>
          <div dangerouslySetInnerHTML={{ __html: blog.details }}></div>
        </TermsCondition>

        <div className="flex flex-col justify-around md:flex-row">
          <div className="p-2 lg:p-0">
            <Image src={blog2} alt="" />
          </div>
          <div className="p-2 lg:p-0">
            <Image src={blog3} alt="" />
          </div>
        </div>
        <div className="items-center md:flex ">
          <div className="p-2">
            <Text size="lg" style="font-bold ">
              Tags
            </Text>
          </div>

          <ul className="flex flex-wrap font-medium text-center">
            {tags.map((ele: any, index: number) => (
              <Tags key={index} tag={ele.attributes.name} />
            ))}
          </ul>
        </div>
        <div className="grid items-center justify-start grid-cols-1 gap-8 py-20 md:grid-cols-2">
          <BlogControl
            right
            arrowTitle="Previous Post"
            blogTitle="Lorem ipsum dolor sit amet con Arcu tristique"
          />
          <BlogControl
            left
            arrowTitle="Next Post"
            blogTitle="Lorem ipsum dolor sit amet con Arcu tristique"
          />
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
