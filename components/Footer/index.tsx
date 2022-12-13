import Image from "next/image";
import Text from "../../elements/Text";
import Linktag from "../../elements/Linktag";
import LinkList from "./LinkList";
import discordicon from "/public/socialIicon/discord.dark.min.svg"
import twitter from "../../public/socialIicon/twitter.dark.min.svg"
import github from "../../public/socialIicon/github.dark.min.svg"
import youtube from "../../public/socialIicon/youtube.dark.min.svg"
import Logo from "../Header/Logo";

export const Footer = () => {

    const data=[
        {
            id:1,
            title:"Our Team",
            link:'/ournote'
        },
        {
            id:2,
            title:"Notes",
            link:'notes'
        }
    ]
  return (
    <>
      <div className="container mx-auto py-14">
        <Logo/>
        <div className="footer_grid">
          <div className="para_text">
            <Text size='sm' style='text-textcolor' font='light'> Laravel is a web application framework with expressive, elegant
              syntax. We believe development must be an enjoyable and creative
              experience to be truly fulfilling. Laravel attempts to take the
              pain out of development by easing common tasks used in most web
              projects.</Text>
            <ul className="flex items-center py-6 space-x-7">
              <li>
               <Linktag href=''>
                <Image src={discordicon} alt='discord' width={20} height={20}></Image>
               </Linktag>
              </li>
              <li>
               <Linktag href=''>
                <Image src={twitter} alt='discord' width={20} height={20}></Image>
               </Linktag>
              </li>
              <li>
               <Linktag href=''>
                <Image src={github} alt='discord' width={20} height={20}></Image>
               </Linktag>
              </li>
              <li>
               <Linktag href=''>
                <Image src={youtube} alt='discord' width={20} height={20}></Image>
               </Linktag>
              </li>
            </ul>
          </div>
          <div className="col-span-6 text-xs md:col-span-3 lg:col-span-2">
            <Text size="sm" font="normal" style="uppercase">
              Highlights
            </Text>
            <div className="mt-5">
              <ul className="space-y-3 text-gray-700 ">
                {
                    data.map((ele,index:any)=> <LinkList title={ele.title} link={ele.link} key={index} />)
                }
              </ul>
            </div>
          </div>
          <div className="col-span-6 text-xs md:col-span-3 lg:col-span-2">
            <Text size="sm" font="normal" style="uppercase">
            RESOURCES
            </Text>
            <div className="mt-5">
              <ul className="space-y-3 text-gray-700 ">
                {
                    data.map((ele,index:any)=> <LinkList title={ele.title} link={ele.link} key={index} />)
                }
              </ul>
            </div>
          </div>
          <div className="col-span-6 text-xs md:col-span-3 lg:col-span-2">
            <Text size="sm" font="normal" style="uppercase">
            PARTNERS
            </Text>
            <div className="mt-5">
              <ul className="space-y-3 text-gray-700 ">
                {
                    data.map((ele, index:any)=> <LinkList title={ele.title} link={ele.link} key={index} />)
                }
              </ul>
            </div>
          </div>
          <div className="col-span-6 text-xs md:col-span-3 lg:col-span-2">
            <Text size="sm" font="normal" style="uppercase">
            ECOSYSTEM
            </Text>
            <div className="mt-5">
              <ul className="space-y-3 text-gray-700 ">
                {
                    data.map((ele, index:any)=> <LinkList title={ele.title} link={ele.link} key={index}/>)
                }
              </ul>
            </div>
          </div>
          
          
        </div>
        <div className="py-6 pt-6 pb-16 border-t border-gray-200 ">
            <p className="text-xs text-textcolor ">
                Laravel is a Trademark of Taylor Otwell. Copyright © 2011-2022 Laravel LLC.
            </p>
            <p className="py-4 text-xs text-textcolor ">
                Code highlighting provided by <a href="https://torchlight.dev">Torchlight</a>
            </p>
        </div>
      </div>
    </>
  );
};
