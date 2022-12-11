import SubBanner from "../components/SubBanner";
import HeroSection from "../section/HeroSection";
import Services from "../section/Services";
import Sponsors from "../section/Sponsors";
import SubSection from "../section/SubSection";
import phpcodeimage from "../public/phpcode.png";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Sponsors />
      <SubSection />
      <Services />
      <SubBanner
        heading="Move fast...with confidence."
        desc="Laravel is committed to delivering the best testing experience you can imagine. No more brittle tests that are a nightmare to maintain. Beautiful testing APIs, database seeding, and painless browser testing let you ship with confidence."
        btntext="LEARN MORE"
        src={phpcodeimage}
      />
    </>
  );
}
