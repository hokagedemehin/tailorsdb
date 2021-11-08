import React from "react";
import AboutContactUsComponent from "../../components/about/about.contact.us.component";
import AboutPageComponent from "../../components/about/about.page.component";
import Layout from "../../components/layout/layout";

const AboutPage = () => {
  return (
    <Layout
      name="About Page"
      desc="More Information about Tailor's DB can be found here"
    >
      <AboutPageComponent />
      <AboutContactUsComponent />
    </Layout>
  );
};

export default AboutPage;
