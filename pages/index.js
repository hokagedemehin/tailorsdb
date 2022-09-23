import CallToActionComponent from '../components/home/actionCall/CallToActionComp';
import ContentComponent from '../components/home/content/ContentComp';
import HeroSection from '../components/home/hero/HeroSection';
import PointsComp from '../components/home/motivation/PointsComp';
import LayoutComp from '../components/layout/LayoutComp';

export default function Home() {
  return (
    <LayoutComp>
      <HeroSection />
      <ContentComponent />
      <PointsComp />
      <CallToActionComponent />
    </LayoutComp>
  );
}
