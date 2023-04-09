import HeroSection from "../components/HeroSection";
import Bestsellers from "../components/Bestsellers";
import Banner from "../components/Banner";
import Trends from "../components/Trends";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";



function Home() {
  return (
    <>
      <HeroSection />
      <Bestsellers />
      <Banner />
      <Trends />
      <Banner />

      <Newsletter />
      <Footer />
    </>
  );
}
export default Home;