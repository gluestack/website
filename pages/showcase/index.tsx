import Showcase from "../../section/Showcase";
import Layout from "../../Layout/Layout";
import HeroSection from "../../section/Showcase/HeroSection";
import { ShowCaseService } from "../../services";

function showcase({showcase}:any) {
  return (
    <Layout title={"ShowCase - gluestack"} description={""}>
        <HeroSection />
      <Showcase showcase={showcase}/>
    </Layout>
  );
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