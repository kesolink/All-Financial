import React from "react";
import AboutHero from "../component/about/AboutHero";
import Mission from "../../src/component/about/Mission";
import Footer from "../component/Footer";
import Value from "../component/about/Value";
import Excellence from "../component/about/Excellence";
import Level from "../component/about/Level";

function AboutPage() {
  return (
    <div>
      <AboutHero />
      <Mission />
      <Value />
      <Excellence />
      <Level />
      <Footer />
    </div>

  );
}

export default AboutPage;
