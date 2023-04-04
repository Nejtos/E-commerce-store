import "./ProductPage.css";
import Quantity from "../components/Quantity";
import Trends from "../components/Trends";
import Button from "../components/Button";
import { slideLeft } from "../hooks/slideLeft";
import { slideRight } from "../hooks/slideRight";
import ProductInfo from "../components/ProductInfo";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function ProductPage() {
  return (
    <>
      <div className="product-page-container">
        <div className="container">
          <div className="product-page-grid">
            <div className="product-container-title">Title title title</div>
            <div className="grid-left-container">
              <div className="pp-one"></div>
              <div className="pp-two"></div>
              <div className="pp-three"></div>
              <div className="pp-four"></div>
            </div>
            <div className="grid-right-container">
              <div className="single-product-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <Quantity />
            </div>
          </div>
        </div>
      </div>

      <ProductInfo />

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
