import React from "react";
import HeroSection from "../section/Home/HeroSection";
import Layout from "../Layout/Layout";
import DeveloperPreview from "../components/DeveloperPreview";
import MordenStack from "../section/Home/MorderStack";
import EcoSystem from "../section/Home/EcoSystem";
import CardsSection from "../section/Home/CardsSection";
import SignupFooter from "../section/Home/SignupFooter";
import CodeAnimation from "../section/Home/CodeAnimation";

export default function Home() {
  return (
    <Layout>
      <div className="grid fixed-layout">
        <DeveloperPreview/>
        <HeroSection />
        <CodeAnimation />
        <MordenStack />
        <CardsSection />
        <EcoSystem />
        <SignupFooter />
      </div>
      {/* <Footer /> */}

    </Layout>
  );
}
