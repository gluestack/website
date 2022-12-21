import React from "react";
import HeroSection from "../../section/Home/HeroSection";
import Layout from "../../Layout/Layout";
import DeveloperPreview from "../../components/DeveloperPreview";
import MordenStack from "../../section/Home/MorderStack";
import EcoSystem from "../../section/Home/EcoSystem";
export default function Home() {
  return (
    <Layout >
      <div className="grid fixed-layout">
        <HeroSection />
        <MordenStack />
        <EcoSystem />
      </div>
      <DeveloperPreview/>
    </Layout>
  );
}
