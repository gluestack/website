import ShowcaseSIngle from "../../section/Showcase";
import Layout from "../../Layout/Layout";
import HeroSection from "../../section/Showcase/HeroSection";
import { ShowCaseService } from "../../services";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useAuthHook from "../../auth-context/use-auth-hook";

function Showcase({showcase}:any) {

  const [user, isLoading] = useAuthHook();
  const router = useRouter() as any;

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push("/");
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return <></>;
  }
  if (user) {
  return (
    <Layout pageTitle={"ShowCase - gluestack"} description={""}>
        <HeroSection />
      <ShowcaseSIngle showcase={showcase}/>
    </Layout>
    );
  }

  return <></>;
}
export default Showcase;

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