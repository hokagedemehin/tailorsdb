// import Head from "next/head";
import CallToActionComponent from "../components/home/actionCall/call.to.action.component";
import ContentComponent from "../components/home/content/content.component";
import HeroSection from "../components/home/hero/hero.section.component";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <Layout
      name="home"
      desc="The secure place for tailors to keep their clients measurements"
    >
      <HeroSection />
      <ContentComponent />
      <CallToActionComponent />
    </Layout>
  );
}
