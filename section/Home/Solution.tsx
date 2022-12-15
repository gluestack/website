import dynamic from "next/dynamic";
import React from "react";
const Card = dynamic(() => import("../../components/Card"));
import data from "../../data.json";
import Description from "../../elements/Description";
import Title from "../../elements/Title";

function Solution() {
  return (
    <>
      <div className="container mx-auto">
        <div className="lg:w-6/12">
          <Title>Enterprise scale without the enterprise complexity.</Title>
          <Description>
            Our vast library of meticulously maintained packages means
            you&apos;re ready for anything. Let{" "}
            <a className="underline" href="/docs/octane">
              Laravel Octane
            </a>{" "}
            supercharge your application&apos;s performance, and experience
            infinite scale on{" "}
            <a className="underline" href="https://vapor.laravel.com">
              Laravel Vapor
            </a>
            , our serverless deployment platform powered by AWS Lambda.
          </Description>
        </div>
        <ul className="grid py-6 grid-cols-2">
          {data.largeCards.map((data: any, index: any) => (
            <li key={index}>
              <Card
                title={data.title}
                desc={data.desc}
                image={data.image}
                color={data.color}
                href="/car"
              />
            </li>
          ))}
        </ul>

        <ul className="grid lg:grid-cols-3 grid-cols-2">
          {data.smallCards.map((data: any, index: any) => (
            <li key={index}>
              <Card title={data.title} desc={data.desc} image={data.image} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Solution;
