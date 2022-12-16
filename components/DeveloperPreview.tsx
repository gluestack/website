import React from "react";
import Text from "../elements/Text";

function DeveloperPreview() {
  return (
    <div className="fixed bottom-0 w-full h-20 bg-gray-200 md:h-14 ">
      <div className="container flex items-center justify-center mx-auto">
        <div className="p-1 text-center md:pt-4">
          <Text size="md" style="">
            This is a developer preview. Not recommended for production
            environment.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default DeveloperPreview;
