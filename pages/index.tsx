import React from "react";
import HeroSection from "../section/Home/HeroSection";
import Layout from "../Layout/Layout";
import MordenStack from "../section/Home/MorderStack";
import EcoSystem from "../section/Home/EcoSystem";
import CardsSection from "../section/Home/CardsSection";
import SignupFooter from "../section/Home/SignupFooter";

export default function Home() {

  return (
    <Layout pageTitle={"One stack for web, mobile & backend"}  description="100% open source full-stack framework that takes away the complexities of building modern web & mobile apps. Build effortlessly and scale swiftly from idea to enterprise." ogUrl="http://gluestack.io">
      <div className="grid fixed-layout">
        <HeroSection />
        <MordenStack />
        <CardsSection />
        <EcoSystem />
        <SignupFooter />
      </div>
    </Layout>
  );
}
