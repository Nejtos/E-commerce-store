import "./ProductPage.css";
import Quantity from "../components/Quantity";
import Trends from "../components/Trends";
import Button from "../components/Button";
import { slideLeft } from "../hooks/slideLeft";
import { slideRight } from "../hooks/slideRight";
import ProductInfo from "../components/ProductInfo";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { items } from "../components/Data.jsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function ProductPage() {
  const location = useLocation();
  const [activeImage, setActiveImage] = useState("");
  return (
    <>
      {items
        .filter(({ id }) => id === location.state)
        .map((product, index) => {
          return (
            <div className="product-page-container" key={index}>
              <div className="container">
                <div className="product-page-grid">
                  <div className="product-container-title">
                    {product.description}
                  </div>
                  <div className="grid-left-container">
                    <div
                      className="pp-one"
                      // style={{ backgroundImage: `url(${product.img})` }}
                      style={
                        activeImage === ""
                          ? { backgroundImage: `url(${product.img})` }
                          : { backgroundImage: `url(${activeImage})` }
                      }
                    ></div>
                    <div
                      className="pp-two"
                      onMouseEnter={() => setActiveImage(product.img)}
                      style={{ backgroundImage: `url(${product.img})` }}
                    ></div>
                    <div
                      className="pp-three"
                      onMouseEnter={() => setActiveImage(product.otherImgs[0])}
                      style={{
                        backgroundImage: `url(${product.otherImgs[0]})`,
                      }}
                    ></div>
                    <div
                      className="pp-four"
                      onMouseEnter={() => setActiveImage(product.otherImgs[1])}
                      style={{
                        backgroundImage: `url(${product.otherImgs[1]})`,
                      }}
                    ></div>
                  </div>
                  <div className="grid-right-container">
                    <div className="single-product-desc">{product.details}</div>
                    <Quantity active={product.id} />
                    <div className="quantity-extra-buttons">
                      <Button buttonContent="ADD TO CART" clickEffect={null} />
                      <Button buttonContent="BUY NOW" clickEffect={null} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      <ProductInfo active={location.state} />

      <div className="product-page-trends">
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

      <Newsletter />
      <Footer />
    </>
  );
}
export default ProductPage;
