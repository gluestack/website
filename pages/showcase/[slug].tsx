import React from "react";
import Author from "../../components/Author";
import Heading from "../../elements/Heading";
import Layout from "../../Layout/Layout";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Button from "../../components/Button";
import Text from "../../elements/Text";
import Description from "../../elements/Description";
import Image from "next/image";
import Card from "../../components/Card";
import Tags from "../../components/Tags";
import profileImg from "../../public/blog/Ellipse 1682person.svg";
import { fetchAPI } from "../../lib/api";
import { useRouter } from "next/router";
import InerBanner from "../../components/InerBanner";

function showcase({ events, categories, tags, showcase }: any) {
  // console.log(showcase.length);

  const router = useRouter();
  return (
    <>
      <Layout
        ogUrl={router.asPath}
        title={events.title}
        description={events.shortDes}
        ogImgUrl={events.coverImg.data.attributes.url}
      >
        <InerBanner title={events.title} paddingBottom single />

        <div className="container py-4">
          <div className="flex items-center py-4 lg:py-1">
            <Author name="Williams" src={profileImg} />
            <span className="p-2 text-lg dark:text-white">
              <FaGithub />
            </span>
            <span className="p-1 text-lg dark:text-white">
              <FaTwitter />
            </span>
          </div>
          <div className="flex flex-col pb-12 mt-4 lg:flex-row">
            <Image
              src={events.coverImg.data.attributes.url}
              width={800}
              height={200}
              alt={events.altText || "banner"}
            />
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-4 lg:mt-0">
              <div className="p-2 rounded-lg bg-gray dark:bg-black-200">
                <Text size="md">
                  Category:
                  {categories.map((ele: any, index: number) => (
                    <Tags key={index}>{ele.attributes.name}</Tags>
                  ))}
                </Text>
                <Text size="md">
                  Tags:{" "}
                  {tags.map((ele: any, index: number) => (
                    <Tags key={index}>#{ele.attributes.name}</Tags>
                  ))}
                </Text>
              </div>
              <Description size="md">Descpertion</Description>
              <div className="p-3 rounded-md bg-white-200 dark:bg-black-200">
                <Description size="base">{events.shortDes}</Description>
              </div>
              <div className="flex items-center justify-around py-4 lg:justify-start">
                <Button link={events.demoLink} type="primary">
                  Demo
                </Button>
                <div className="lg:ml-2">
                  {" "}
                  <Button link={events.github_link}>GITHUB</Button>
                </div>
              </div>
            </div>
          </div>
         {showcase.length>0 && <div>
          <Heading priority="3">Related Project</Heading>
          <div className="grid gap-8 py-12 grid-col-1 lg:grid-cols-3">
            {showcase &&
              showcase.map((ele: any, index: number) => {
                  return (
                    <Card
                      key={index}
                      src={ele.attributes.coverImg.data?.attributes.url}
                      title={ele.attributes.title}
                      description={ele.attributes.shortDes}
                      altText={""}
                      href={ele.attributes.slug || null}
                    />
                  );
               
              })}
          </div>
         </div>}
        </div>
      </Layout>
    </>
  );
}

export default showcase;

export async function getServerSideProps(context: any) {
  let param = context.params;

  let events, categories, tags, showcase,id;
  let option = {
    author: "",
    categories: "event_categories",
    tags: "event_tags",
  };
  try {
    const data = await fetchAPI("events?filters[slug][$eq]", param, option);
    const content = data.data[0];
    id=data.data[0].id
    events = content.attributes;
    categories = content.attributes.event_categories.data;
    // console.log(categories[0].attributes.name, "???");
    tags = content.attributes.event_tags.data;
  } catch (error) {}
  try {
    let param = {
      slug: categories[0].attributes.name,
    };
    let option = {
      author: "",
      categories: "",
      tags: "",
    };

    const data = await fetchAPI(
      `events?filters[id][$ne]=${id}&filters[event_categories][name]`,
      param,
      option
    );
    const content = data.data;
    showcase = content;
    // console.log(showcase, "+++");
  } catch (error) {}

  return {
    props: {
      showcase: showcase || [],
      events: events || {},
      categories: categories || [],
      tags: tags || [],
    },
  };
}
