import React from "react";
import Text from "../elements/Text";

function DeveloperPreview() {
  return (
    <div className="bg-gray-200 dark:bg-black mt-4 py-4">
      <div className="container flex items-center justify-center">
          <Text size="base" style="font-display text-black-100 tracking-wide	">
            This is a developer preview. Not recommended for production
            environment.
          </Text>
      </div>
    </div>
  );
}

export default DeveloperPreview;
