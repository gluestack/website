import React from 'react';
import Image from 'next/image';
import Text from '../elements/Text';
function Author({src, altText, name}: any) {
  return (
    <div className="flex items-center ">
      <Image
        src={src}
        className="rounded-full"
        width={40}
        height={50}
        alt={altText}
      />
      <div className="ml-4">
        <Text size="sm">{name}</Text>
      </div>

    </div>
  );
}

export default Author;
