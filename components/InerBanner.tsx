import React from "react";
import Banner from "./Banner";
import Heading from "../elements/Heading";
import Text from "../elements/Text";
import { useRouter } from "next/router";
import { FaBackward } from "react-icons/fa";

function InerBanner({
  title,
  description,
  last,
  paddingBottom,
  single,
}: any) {
  const router = useRouter();
  return (
    <div className="mt-8">
      <Banner paddingBottom={paddingBottom}>
        <div className="mb-8">
          <button onClick={() => router.back()} className="btn_outline group">
            <div className="flex items-center btn text-primary bg-white ring-primary lg:px-6 lg:py-2 px-12 text-base">
              <div className="pr-4">
                <FaBackward />
              </div>
              Back{" "}
            </div>
          </button>
        </div>
        <Heading priority="1" single={single}>
          {title}
          <span className="text-primary">{last}</span>
        </Heading>
        {description && (
          <Text
            size="md"
            style="text-secondary font-displayLight py-6  w-full "
          >
            {description}
          </Text>
        )}
      </Banner>
    </div>
  );
}

export default InerBanner;
