import React from "react";
import Text from "../elements/Text";

function DeveloperPreview() {
  return (
    <div className="static inset-x-0 bottom-0 w-full h-20 bg-gray-200 md:fixed ">
      <div className="container mx-auto">
        <div className="content-center">
          <Text size="md" style="text-center lg:pt-6 pt-4">
            This is a developer preview. Not recommended for production
            environment.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default DeveloperPreview;
