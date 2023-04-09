import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-page-container">
        <div className="container">
          <div className="home-page-grid-box">
            <div className="one">
              <div
                className="grid-photo-title"
                onClick={() => {
                  navigate("/categories", { replace: true, state: "all" });
                  window.scrollTo(0, 0);
                }}
              >
                <p>For oneself</p>
              </div>
            </div>
            <div className="two">
              <div
                className="grid-photo-title"
                onClick={() => {
                  navigate("/categories", { replace: true, state: "bathroom" });
                  window.scrollTo(0, 0);
                }}
              >
                <p>Bathroom</p>
              </div>
            </div>
            <div className="three-top">
              <div
                className="grid-photo-title"
                onClick={() => {
                  navigate("/categories", { replace: true, state: "kitchen" });
                  window.scrollTo(0, 0);
                }}
              >
                <p>Kitchen</p>
              </div>
            </div>
            <div className="three-bottom">
              <div
                className="grid-photo-title"
                onClick={() => {
                  navigate("/categories", { replace: true, state: "lamps" });
                  window.scrollTo(0, 0);
                }}
              >
                <p>Lighting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroSection;
