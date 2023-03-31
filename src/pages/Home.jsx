import "./Home.css";
import Product from "../components/Product";
import Trends from "../components/Trends";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= 221;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += 221;
  };

  return (
    <>
      <div className="home-page-container">
        <div className="container">
          <div className="home-page-grid-box">
            <div className="one">
              <div className="grid-photo-title">
                <p>Choose for yourself</p>
              </div>
            </div>
            <div className="two">
              <div className="grid-photo-title">
                <p>Bathroom</p>
              </div>
            </div>
            <div className="three-top">
              <div className="grid-photo-title">
                <p>Kitchen</p>
              </div>
            </div>
            <div className="three-bottom">
              <div className="grid-photo-title">
                <p>Lighting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-page-new-collection">
        <div className="container">
          <div className="home-page-sections-title">New Collection</div>
          <div className="home-page-bestsellers-grid">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
      <div className="home-page-banner">
        <div className="container">
          <Banner />
        </div>
      </div>
      <div className="home-page-trends">
        <div className="container">
          <div className="home-page-sections-title">Trending Now</div>
          <div className="home-page-trends-grid">
            <button type="submit" onClick={slideLeft}>
              Left
            </button>
            <div id="slider" className="trends-slider">
              <Trends />
              <Trends />
              <Trends />
              <Trends />
              <Trends />
              <Trends />
              <Trends />
              <Trends />
              <Trends />
              <Trends />
              <Trends />
            </div>
            <button type="submit" onClick={slideRight}>
              Right
            </button>
          </div>
        </div>
      </div>
      <div className="home-page-banner">
        <div className="container">
          <Banner />
        </div>
      </div>
      <div className="home-page-newsletter">
        <div className="container">
          <Newsletter />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
