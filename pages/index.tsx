import SubBanner from "../components/SubBanner";
import HeroSection from "../section/Home/HeroSection";
import Services from "../section/Home/Services";
import Sponsors from "../section/Home/Sponsors";
import SubSection from "../section/Home/SubSection";
import phpcodeimage from "../public/images/phpcode.png";
import Solution from "../section/Home/Solution";
import Testimonial from "../section/Home/Testimonial";
import Community from "../section/Home/Community";
import DeveloperPreview from "../components/DeveloperPreview";
import Hook from "../components/Animation";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <Sponsors /> */}
      {/* <SubSection />
      <Services />
      <SubBanner
        heading="Move fast...with confidence."
        desc="Laravel is committed to delivering the best testing experience you can imagine. No more brittle tests that are a nightmare to maintain. Beautiful testing APIs, database seeding, and painless browser testing let you ship with confidence."
        btntext="LEARN MORE"
        src={phpcodeimage}
      />
      <Solution />
      <Testimonial/>
      <Community/> */}
      {/* <div className="container">
        <div className="flex twitter">
          <TweetEmbed tweetId='771763270273294336' />
      </div>

      </div> */}
      {/* <SubBanner
        heading="Hire a partner for your next project"
        desc="Laravel Partners are elite shops providing top-notch Laravel development and consulting. Each of our partners can help you craft a beautiful, well-architected project."
        btntext="BROWSE PARTNERS"
        src={phpcodeimage}
      /> */}
      <DeveloperPreview/>
    </>
  );
}
