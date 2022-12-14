import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Heading from "../../elements/Heading";
function HeroSection() {
  const [category, setCaregory]=useState(['Home','page1','page2']);
  return (
    <>
      <div className="container py-6">
      {/* <Breadcrumb crumbs={category}/> */}
        <Heading priority={1}>Terms and Conditions</Heading>
      </div>
    </>
  );
}

export default HeroSection;
