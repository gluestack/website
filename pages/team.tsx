import React from "react";
import GlobalBaanner from "../components/GlobalBanner";
import Team from "../section/Team";

function team() {
  return (
    <>
      <GlobalBaanner
        title="Meet the gluestack Team"
        description="We are a team of dedicated and passionate individuals who 
        are committed to delivering excellence in everything we do. With a diverse
         range of skills and experience, we come together to form a dynamic and 
         unstoppable force. Meet the members of our team below and learn more
          about what makes us tick"
      />
      <Team/>
    </>
  );
}

export default team;
