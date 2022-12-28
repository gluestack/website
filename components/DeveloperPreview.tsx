import React from "react";
import Text from "../elements/Text";

function DeveloperPreview() {
  return (
    <div className="bg-purple-100 dark:bg-secondary mt-2 py-4 relative z-10">
      <div className="container text-center">
        <Text size="md" primaryLight>
          This is a developer preview. Not recommended for production
          environment.
        </Text>
      </div>
    </div>
  );
}

export default DeveloperPreview;
