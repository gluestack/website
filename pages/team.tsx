import React from "react";
import Details from "../section/Team/Details";
import Layout from "../Layout/Layout";
import HeroSection from "../section/Team/HeroSection";

function team({team}:any) {
  
  return (
    <Layout>
     <HeroSection />
      <Details team={team}/>
    </Layout>
  );
}

export default team;


