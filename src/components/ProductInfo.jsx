import "./ProductInfo.css";
import { items } from "./Data";

function ProductInfo({ active }) {
  return (
    <>
      {items
        .filter(({ id }) => id === active)
        .map((product, index) => {
          return (
            <div className="product-info-box" key={index}>
              <div className="container">
                <div className="product-info-boxes">
                  <div className="product-info-details">
                    <div className="product-info-context">Texture:</div>
                    <div className="product-info-context1">
                      {product.texture}
                    </div>
                  </div>
                  <div className="product-info-details">
                    <div className="product-info-context">Size:</div>
                    <div className="product-info-context1">{product.size}</div>
                  </div>
                  <div className="product-info-details">
                    <div className="product-info-context">Weight:</div>
                    <div className="product-info-context1">
                      {product.weight}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
export default ProductInfo;
