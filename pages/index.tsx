import React from "react";
import SubBanner from "../components/SubBanner";
import HeroSection from "../section/Home/HeroSection";
import Services from "../section/Home/Services";
import SubSection from "../section/Home/SubSection";
import Solution from "../section/Home/Solution";
import Testimonial from "../section/Home/Testimonial";
import Community from "../section/Home/Community";
import Hook from "../components/Animation";
import Layout from "../Layout/Layout";
import DeveloperPreview from "../components/DeveloperPreview";

export default function Home() {
  return (
    <Layout >
      <div className="grid fixed-layout">
        <HeroSection />
      </div>
      <DeveloperPreview/>
    </Layout>
  );
}
