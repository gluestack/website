import React from "react";
import SubBanner from "../components/SubBanner";
import HeroSection from "../section/Home/HeroSection";
import Services from "../section/Home/Services";
import SubSection from "../section/Home/SubSection";
import Solution from "../section/Home/Solution";
import Testimonial from "../section/Home/Testimonial";
import Community from "../section/Home/Community";
import DeveloperPreview from "../components/DeveloperPreview";
import Hook from "../components/Animation";
import Layout from "../Layout/Layout";
export default function Home() {
  return (
    <Layout title={"home"} description={""}>
      <HeroSection />
     
      <DeveloperPreview/>
    </Layout>
  );
}
