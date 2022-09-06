import CallToActionComponent from '../components/home/actionCall/CallToActionComp';
import ContentComponent from '../components/home/content/ContentComp';
import HeroSection from '../components/home/hero/HeroSection';
import PointsComp from '../components/home/motivation/PointsComp';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ContentComponent />
      <PointsComp />
      <CallToActionComponent />
    </Layout>
  );
}
