import dynamic from "next/dynamic";
import React from "react";
const Card = dynamic(() => import("../../components/Card"));
import data from "../../data.json";
import Heading from "../../elements/Heading";
import Description from "../../elements/Description";

function Solution() {
  return (
    <>
      <div className="container mx-auto">
        <div className="lg:w-6/12">
          <Heading
            isLight={undefined}
            color={undefined}
            priority={2}
          >
            Enterprise scale without the enterprise complexity.
          </Heading>
          <Description>
            Our vast library of meticulously maintained packages means you're
            ready for anything. Let{" "}
            <a className="underline" href="/docs/octane">
              Laravel Octane
            </a>{" "}
            supercharge your application's performance, and experience infinite
            scale on{" "}
            <a className="underline" href="https://vapor.laravel.com">
              Laravel Vapor
            </a>
            , our serverless deployment platform powered by AWS Lambda.
          </Description>
        </div>
        <ul className="sol_grid md:grid-cols-2">
          {data.largeCards.map((ele: any) => (
            <li>
              <Card
                title={ele.title}
                desc={ele.desc}
                image={ele.image}
                color={ele.color}
                href='/car'
              />
            </li>
          ))}
        </ul>

        <ul className="sol_grid sm:grid-cols-2 lg:grid-cols-3">
          {data.smallCards.map((ele: any) => (
            <li>
              <Card title={ele.title} desc={ele.desc} image={ele.image} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Solution;
