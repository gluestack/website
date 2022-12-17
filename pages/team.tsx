import React from "react";
import Details from "../section/Team/Details";
import HeroSection from "../section/Team/HeroSection";
import Layout from "../Layout/Layout";


function team({team}:any) {
  
  return (
    <Layout>
     <HeroSection />
      <Details team={team}/>
    </Layout>
  );
}

export default team;


