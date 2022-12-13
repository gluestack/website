import Image from "next/image";
import React from "react";
import twitter from "../../public/socialIicon/twitter.dark.min.svg";
import github from "../../public/socialIicon/github.dark.min.svg";
import linkedin from "../../public/team/Vectorin.svg";
import Text from "../../elements/Text";
import Linktag from "../../elements/Linktag";

{
  /* <div className="absolute z-10 w-full rounded-xl">
       <Image src={bg} alt=''/>
       </div>  */
}

function Members({
  designation,
  name,
  twitterlink,
  linkedinlink,
  githublink,
  profile,
  bgcolor,
  alt,
}: any) {
  return (
    <>
      <div className="">
        <div className="member">
          <div
            className={`absolute z-10 ${
              bgcolor ? `${bgcolor}` : "bg-yellow-500"
            } top-14 w-60 h-60 rounded-xl `}
          ></div>
          <div className="memberImg">
            <Image
              src={profile}
              alt={`${alt ? alt : "image"} `}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="memberName">
          <div className="pt-2">
            <Text size="lg" font="bold">
              {name}
            </Text>
          </div>
          <div className="pb-2">
            <Text size="sm" font="light">
              {designation}
            </Text>
          </div>
          <div className="flex gap-x-3">
            <Linktag href={twitterlink}>
              <Image src={twitter} alt="icon" height={20} width={20} />
            </Linktag>
            <Linktag href={linkedinlink}>
              <Image src={linkedin} alt="icon" height={20} width={20} />
            </Linktag>
            <Linktag href={githublink}>
              <Image src={github} alt="icon" height={20} width={20} />
            </Linktag>
          </div>
        </div>
      </div>
    </>
  );
}

export default Members;
