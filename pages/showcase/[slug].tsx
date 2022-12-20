import React from "react";
import Author from "../../components/Author";
import Heading from "../../elements/Heading";
import Layout from "../../Layout/Layout";
import { FaGithub } from "react-icons/fa";
import Button from "../../components/Button";
import Text from "../../elements/Text";
import Description from "../../elements/Description";
import Image from "next/image";
import smallCard from "../../public/showcase/smallShowCase.svg";
import Card from "../../components/Card";
import Tags from "../../components/Tags";
import profileImg from "../../public/blog/Ellipse 1682person.svg";
import { fetchAPI } from "../../lib/api";
import { useRouter } from "next/router";
import InerBanner from "../../components/InerBanner";

function showcase({ events, categories, tags }: any) {
  const router = useRouter();
  return (
    <>
      <Layout ogUrl={router.asPath} title={events.title} description={events.shortDes} ogImgUrl={events.coverImg.data.attributes.url}>
      <InerBanner title={events.title} paddingBottom />

        <div className="container py-4">
          <div className="flex items-center py-4 lg:py-1">
            <Author name="Williams" src={profileImg} />
            <span className="p-2 text-lg ">
              <FaGithub />
            </span>
            <span className="p-1 text-lg">
              <FaGithub />
            </span>
          </div>
          <div className="flex flex-col pb-12 lg:flex-row mt-4">
            <Image
              src={events.coverImg.data.attributes.url}
              width={800}
              height={200}
              alt={events.altText || "banner"}
            />
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-4 lg:mt-0">
              <div className="p-2 rounded-lg bg-gray">
                <Text size="md">
                  Category:
                  {categories.map((ele: any, index: number) => (
                    <Tags key={index}>{ele.attributes.name}</Tags>
                  ))}
                </Text>
                <Text size="md">
                  Tags:{" "}
                  {tags.map((ele: any, index: number) => (
                    <Tags key={index} fontbold>
                      #{ele.attributes.name}
                    </Tags>
                  ))}
                </Text>
              </div>
              <Description size="md">Descpertion</Description>
              <div className="p-3 rounded-md bg-white-200">
                <Description size="base">{events.shortDes}</Description>
              </div>
              <div className="flex items-center justify-around py-4 lg:justify-start">
                <Button link={events.demoLink} isSecondary>
                  Demo
                </Button>
                <Button link>GITHUB</Button>
              </div>
            </div>
          </div>
          <Heading priority="3">Related Project</Heading>
          <div className="grid gap-8 py-12 grid-col-1 lg:grid-cols-3">
            <Card src={smallCard} title="text" description="text" />
            <Card src={smallCard} title="text" description="text" />
            <Card src={smallCard} title="text" description="text" />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default showcase;

export async function getServerSideProps(context: any) {
  let param = context.params;

  let events, categories, tags, nextblog, id, blogsData, previousblog;
  try {
    const data = await fetchAPI("events?filters[slug][$eq]", param);
    const content = data.data[0];
    events = content.attributes;
    categories = content.attributes.event_categories.data;
    tags = content.attributes.event_tags.data;
  } catch (error) {}

  return {
    props: {
      events: events || {},
      categories: categories || [],
      tags: tags || [],
    },
  };
}
