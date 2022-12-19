import Showcase from "../../section/Showcase";
import Layout from "../../Layout/Layout";
import HeroSection from "../../section/Showcase/HeroSection";

function showcase() {
  return (
    <Layout title={"ShowCase"} description={"ShowCase"}>
        <HeroSection />
      <Showcase />
    </Layout>
  );
}

export default showcase;
