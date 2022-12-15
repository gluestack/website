import React from "react";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";
import banner from "/public/images/banner.png";
import Banner from "../../components/Banner";
function HeroSection() {
  return (
    <Banner cover={banner} altText="vscode">
      <Heading  priority={1}>
        Meet the gluestack Team
      </Heading>

      <Text style="para" size="md" font="light">
        We are a team of dedicated and passionate individuals who are committed
        to delivering excellence in everything we do. With a diverse range of
        skills and experience, we come together to form a dynamic and
        unstoppable force. Meet the members of our team below and learn more
        about what makes us tick
      </Text>
    </Banner>
  );
}

export default HeroSection;
