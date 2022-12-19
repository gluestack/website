import React from "react";
import Details from "../section/Team/Details";
import HeroSection from "../section/Team/HeroSection";
import Layout from "../Layout/Layout";


function team({team}:any) {
  
  return (
    <Layout title={"Team"} description={'We are a team of dedicated and passionate individuals who are committed to delivering excellence in everything we do. With a diverse range of skills and experience, we come together to form a dynamic and unstoppable force. Meet the members of our team below and learn more about what makes us tick'}>
     <HeroSection />
      <Details team={team}/>
    </Layout>
  );
}

export default team;


