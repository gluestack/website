import React from "react";
import LinkList from "./LinkList";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";

function Resources() {
  return (
    <div>
      <div className="pb-2">
        <Heading priority="6">
          <span className="uppercase text-white">Explore</span>
        </Heading>
      </div>
      <ul>
        <LinkList link="/docs" style="py-2 linkhover">
          <Text size="sm" white>
            Docs
          </Text>
        </LinkList>
        <LinkList link="http://seal.gluestack.io" style="py-2 linkhover" target="_blank">
          <Text size="sm" white>
            Seal
          </Text>
        </LinkList>
        <LinkList link="#" style="py-2 linkhover">
          <div className="flex items-center">
          <Text size="sm" white>
            Design System
            </Text>

            <div className="text-xs  px-2 py-0.5 bg-primary rounded-[4px] text-white ml-1">
                Soon
              </div>
            {/* <div className="absolute rounded bg-black-200 px-1 py-1 text-[8px] -right-[55px] -top-2">
              Upcoming

            </div> */}

          </div>
        </LinkList>
       
        {/* <LinkList link="/showcase" style="py-2">
          <Text size="sm" white>
            Showcase
          </Text>
        </LinkList>
        <LinkList link="/blog" style="py-2">
          <Text size="sm" white>
            Blog
          </Text>
        </LinkList> */}
      </ul>
    </div>
  );
}

export default Resources;
