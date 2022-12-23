import React from "react";
import HeroSection from "../section/Home/HeroSection";
import Layout from "../Layout/Layout";
import DeveloperPreview from "../components/DeveloperPreview";
import MordenStack from "../section/Home/MorderStack";
import EcoSystem from "../section/Home/EcoSystem";
import CardsSection from "../section/Home/CardsSection";
import SignupFooter from "../section/Home/SignupFooter";
import useAuthHook from "../auth-context/use-auth-hook";

export default function Home() {
  const [user, isLoading] = useAuthHook();

  return (
    <Layout pageTitle={"One stack for web, mobile & backend"}  description="100% open source full-stack framework that takes away the complexities of building modern web & mobile apps. Build effortlessly and scale swiftly from idea to enterprise." ogUrl="http://gluestack.io">
      <div className="grid fixed-layout">
        {/* <DeveloperPreview /> */}
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
