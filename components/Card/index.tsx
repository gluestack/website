import React from "react";
import Image from "next/image";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";
function Card({ src, altText, title, description }: any) {
  return (
    <div className="bg-white rounded-lg border border-gray">
      <div className="h-80 w-full	relative">
        <Image src={src} alt={altText} layout="fill" objectFit="cover"  className="rounded-tl-lg rounded-tr-lg" />
      </div>
      <div className="p-4">
        <Heading priority="2" style="text-black-100">
            {title}
        </Heading>
        <div className="mt-2">
            <Text size="md">
                {description}
            </Text>
        </div>
      </div>
    </div>
  );
}

export default Card;
