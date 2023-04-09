import "./Trends.css";
import { items } from "./Data";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { slideLeft } from "../hooks/slideLeft";
import { slideRight } from "../hooks/slideRight";

function Trends() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-page-trends">
        <div className="container">
          <div className="home-page-sections-title">Trending Now</div>
          <div className="home-page-trends-grid">
            <Button buttonContent="left-arrow-img" clickEffect={slideLeft} />
            <div id="slider" className="trends-slider">
              {items
                .filter(({ id }) => id % 2 === 0)
                .map((product, index) => {
                  return (
                    <div
                      className="trends-main-container"
                      key={index}
                      onClick={() => {
                        navigate("/products", {
                          replace: true,
                          state: product.id,
                        });
                        window.scrollTo(0, 0);
                      }}
                    >
                      <div className="trends-box">
                        <div
                          className="trends-box-img"
                          style={{ backgroundImage: `url(${product.img})` }}
                        ></div>
                        <div className="trends-box-details">
                          <div className="trends-box-title">
                            {product.description}
                          </div>
                          <div className="trends-box-price">
                            {product.price}$
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <Button buttonContent="right-arrow-img" clickEffect={slideRight} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Trends;
