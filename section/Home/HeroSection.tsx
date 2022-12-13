// import { url } from "inspector";
import React from "react";
import Button from "../../components/Button";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";
import banner from "/public/images/banner.png";
import Banner from "../../components/Banner";
function HeroSection() {
  return (
    <Banner cover={banner} altText="vscode">
      <Heading  priority={1}>
      One Stack for Everything<br/> <span className="text-primary"> Web</span> and <span className="text-primary">Mobile</span>
      </Heading>
     
      <Text style="para" size="md" font="light">
        Laravel is a web application framework with expressive, elegant syntax.
        We’ve already laid the foundation — freeing you to create without
        sweating the small things.
      </Text>
      <div className="hero-btn">
        <Button isSecondary>GET STARTED</Button>
        <Button>Watch Laracasts</Button>
      </div>
    </Banner>
  );
}

export default HeroSection;
