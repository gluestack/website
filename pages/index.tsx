import React from "react";
import HeroSection from "../section/Home/HeroSection";
import Layout from "../Layout/Layout";
import DeveloperPreview from "../components/DeveloperPreview";
import MordenStack from "../section/Home/MorderStack";
import EcoSystem from "../section/Home/EcoSystem";
import CardsSection from "../section/Home/CardsSection";
import SignupFooter from "../section/Home/SignupFooter";

export default function Home() {
  return (
    <Layout title={"Home - gluestack"}>
      <div className="grid fixed-layout">
        <DeveloperPreview />
        <HeroSection />
        <MordenStack />
        <CardsSection />
        <EcoSystem />
        <SignupFooter />
      </div>
      {/* <Footer /> */}
    </Layout>
  );
}
