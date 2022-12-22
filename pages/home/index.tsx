import React from "react";
import HeroSection from "../../section/Home/HeroSection";
import Layout from "../../Layout/Layout";
import DeveloperPreview from "../../components/DeveloperPreview";

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