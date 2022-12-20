import React from "react";
import Banner from "../../components/Banner";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";

function HeroSection() {
  return (
    <>
      <Banner>
        <div className="py-16 text-center">
        <Heading priority={1}>Join the latest <span className="text-primary">conversation</span></Heading>
        <div className="pt-6 text-start lg:px-36">
       <Text size='md'>
          Welcome to our blog, where we share our thoughts, insights, and expert
          knowledge on a variety of topics. From industry news and trends to
          company updates and behind-the-scenes looks at our work, our blog is
          your go-to source for staying informed and engaged. We invite you to
          explore our latest posts and join the conversation by leaving comments
          and sharing with your network. Happy reading!
        </Text>
       </div>
        </div>
      
      </Banner>
    </>
  );
}

export default HeroSection;
