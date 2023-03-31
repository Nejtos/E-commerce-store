import "./Home.css";
import Product from "../components/Product";
import Trends from "../components/Trends";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { slideLeft } from "../hooks/slideLeft";
import { slideRight } from "../hooks/slideRight";

function Home() {
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
            <Button buttonContent="left-arrow-img" clickEffect={slideLeft} />
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
            <Button buttonContent="right-arrow-img" clickEffect={slideRight} />
          </div>
        </div>
      </div>
      <div className="home-page-banner">
        <div className="container">
          <Banner />
        </div>
      </div>
      
      <Newsletter />
      <Footer />
    </>
  );
}
export default Home;
