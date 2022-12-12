import Image from "next/image";
import React from "react";
import Heading from "../elements/Heading";
import Linktag from "../elements/Linktag";
import Text from "../elements/Text";
import forgeimage from "../public/ecosystem/forge.min.svg";

function Card({ title, desc, image, color,name,href,creator, istestimonial,alt }: any) {
  return (
    <>
      {istestimonial ? (
        <blockquote className="blockquote">
         
          <Text size='sm' font='normal'>{title}</Text>
          <div className="flex items-start gap-4 mt-5">
          {/* className="object-cover object-center w-10 h-10" */}
            <Image  src={image} alt={`${alt ?  alt : 'image'}`} width={50} height={50}/>
            <div>
              <Text >{name}</Text>
              <p className="text-sm text-gray-700">
                Creator of
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  className="text-red-500"
                  rel="noreferrer"
                >
                 {creator}
                </a>
              </p>
            </div>
          </div>
        </blockquote>
      ) : (
        <Linktag href={'/test'} style="card">
          <div className={`card_image bg-forge bg-green-400 `}>
            <Image src={forgeimage} alt={"Icon"} width={50} height={50} />
          </div>
          <div className="ml-4 leading-5">
            <Text font="normal">{title}</Text>
            <Text size="sm" font="light">
              {desc}
            </Text>
          </div>
        </Linktag>
      )}
    </>
  );
}

export default Card;
