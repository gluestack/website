import React from "react";
import Details from "../section/Team/Details";
import HeroSection from "../section/Team/HeroSection";

function team({team}:any) {
  
  return (
    <>
     <HeroSection />
      <Details team={team}/>
    </>
  );
}

export default team;


