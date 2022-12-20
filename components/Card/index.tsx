import React from "react";
import Image from "next/image";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";
import Linktag from "../../elements/Linktag";
function Card({ src, altText, title, description,href }: any) {
  return (
    <div className="bg-white border rounded-lg border-gray">
       <Linktag href={`${href}`}>
      <div className="relative w-full h-80">
        <Image src={src} alt={altText || "banner"} layout="fill" objectFit="cover"  className="rounded-tl-lg rounded-tr-lg" />
      </div>
      </Linktag>
      <div className="p-4">
       <Linktag href={`${href}`}>
       <Heading priority="3" style="text-black-100">
            {title}
        </Heading>
        </Linktag>
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
