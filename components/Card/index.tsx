import React from "react";
import Image from "next/image";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";
function Card({ src, altText, title, description }: any) {
  return (
    <div className="bg-white border rounded-lg border-gray">
      <div className="relative w-full h-80">
        <Image src={src} alt={altText || "banner"} layout="fill" objectFit="cover"  className="rounded-tl-lg rounded-tr-lg" />
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
