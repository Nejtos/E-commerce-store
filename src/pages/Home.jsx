import "./Home.css";
import Trends from "../components/Trends";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { slideLeft } from "../hooks/slideLeft";
import { slideRight } from "../hooks/slideRight";
import Bestsellers from "../components/Bestsellers";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-page-container">
        <div className="container">
          <div className="home-page-grid-box">
            <div className="one">
              <div className="grid-photo-title" onClick={() => {
                    navigate("/categories", { replace: true, state: "all" });
                    window.scrollTo(0, 0);
                  }}>
                <p>Choose for yourself</p>
              </div>
            </div>
            <div className="two">
              <div className="grid-photo-title" onClick={() => {
                    navigate("/categories", { replace: true, state: "bathroom" });
                    window.scrollTo(0, 0);
                  }}>
                <p>Bathroom</p>
              </div>
            </div>
            <div className="three-top">
              <div className="grid-photo-title" onClick={() => {
                    navigate("/categories", { replace: true, state: "kitchen" });
                    window.scrollTo(0, 0);
                  }}>
                <p>Kitchen</p>
              </div>
            </div>
            <div className="three-bottom">
              <div className="grid-photo-title" onClick={() => {
                    navigate("/categories", { replace: true, state: "lamps" });
                    window.scrollTo(0, 0);
                  }}>
                <p>Lighting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-page-new-collection">
        <div className="container">
          <div className="home-page-sections-title">Bestsellers</div>
          <div className="home-page-bestsellers-grid">
            <Bestsellers />
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
