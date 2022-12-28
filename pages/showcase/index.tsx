import Showcase from "../../section/Showcase";
import Layout from "../../Layout/Layout";
import HeroSection from "../../section/Showcase/HeroSection";
import { ShowCaseService } from "../../services";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useAuthHook from "../../auth-context/use-auth-hook";

function showcase({showcase}:any) {

  const [user, isLoading] = useAuthHook();
  const router = useRouter() as any;

  // FETCHING USER DETAILS

  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/");
    }
  });

  if (isLoading) {
    return <></>;
  }
 

  if (user && !isLoading) {
  return (
    <Layout pageTitle={"ShowCase - gluestack"} description={""}>
        <HeroSection />
      <Showcase showcase={showcase}/>
    </Layout>
    );
  }
  return <></>;
}

export default showcase;

export async function getServerSideProps() {
  let showcase;

  try {
    const { data } = await ShowCaseService();
    const content = data.events.data;
    showcase = content;
    
  } catch (error) {}

  return {
    props: {
      showcase: showcase,
    },
  };
}