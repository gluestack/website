import React from "react";
import Image from "next/image";

function CustomImage({ src, alt, style }: any) {
  return (
    <div className={"image-container"}>
      <Image src={src} layout="fill" className={`image ${style}`} alt={alt} />
    </div>
  );
}

export default CustomImage;
