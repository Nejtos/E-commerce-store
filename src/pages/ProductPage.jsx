import Quantity from "../components/Quantity";
import "./ProductPage.css";

function ProductPage() {
  return (
    <>
      <div className="product-page-container">
        <div className="container">
          <div className="product-page-grid">
            <div className="product-container-title">Title title title</div>
            <div className="grid-left-container">
            <div className="pp-one">

            </div>
            <div className="pp-two">
              
            </div>
            <div className="pp-three">
              
            </div>
            <div className="pp-four">
              
            </div>
            </div>
            <div className="grid-right-container">
              <div className="single-product-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
              <Quantity />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductPage;
