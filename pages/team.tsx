import React from "react";
import GlobalBaanner from "../components/GlobalBanner";
import Team from "../section/Team";
import { teamService } from "../services";

function team({team}:any) {
  
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
      <Team team={team}/>
    </>
  );
}

export default team;

// export async function getServerSideProps() {
//   let team;

//   try {
//     const { data } = await teamService();
//     const content = data.teams.data;
//     team = content ?? {};
//   } catch (error) {}

//   return {
//     props: {
//       team: team,
//     },
//   };
// }

