import React from "react";
import Image from "next/image";

function CustomImage({ src, alt, priority, style }: any) {
  return (
    <div className={"image-container"}>
      <Image src={src} layout="fill" className={`image ${style}`} alt={alt} priority={priority ? true: false} />
    </div>
  );
}

export default CustomImage;
