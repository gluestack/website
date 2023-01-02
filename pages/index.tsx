import React from "react";
import HeroSection from "../section/Home/HeroSection";
import Layout from "../Layout/Layout";
import DeveloperPreview from "../components/DeveloperPreview";

import useAuthHook from "../auth-context/use-auth-hook";

import lazyHydrate from 'next-lazy-hydrate';

const MordenStack = lazyHydrate(() => import('../section/Home/MorderStack'));
const EcoSystem =  lazyHydrate(() => import("../section/Home/EcoSystem"));
const CardsSection =  lazyHydrate(() => import( "../section/Home/CardsSection"));
const SignupFooter =  lazyHydrate(() => import(  "../section/Home/SignupFooter"));

export default function Home() {
  const [user, isLoading] = useAuthHook();

  return (
    <Layout pageTitle={"One stack for web, mobile & backend"}  description="100% open source full-stack framework that takes away the complexities of building modern web & mobile apps. Build effortlessly and scale swiftly from idea to enterprise." ogUrl="https://gluestack.io">
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
