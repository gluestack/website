import React from "react";
import Text from "../elements/Text";

function DeveloperPreview() {
  return (
    <div className="bg-purple-100 dark:bg-black-100 mt-2 py-4">
      <div className="container text-center">
          <Text  style="font-display text-primary-700 tracking-wide	lg:text-md text-sm ">
            This is a developer preview. Not recommended for production
            environment.
          </Text>
      </div>
    </div>
  );
}

export default DeveloperPreview;
