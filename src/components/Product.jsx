import "./Product.css";
import { items } from "./Data";
import { useNavigate } from "react-router-dom";

function Product({ filter }) {
  const navigate = useNavigate();

  return (
    <>
      {filter === "all"
        ? items.map((product, index) => {
            return (
              <div
                className="product-box"
                key={index}
                onClick={() => {
                  navigate("/products", { replace: true, state: product.id });
                  window.scrollTo(0, 0);
                }}
              >
                <div
                  className="product-box-img"
                  style={{ backgroundImage: `url(${product.img})` }}
                ></div>
                <div className="product-box-details">
                  <div className="product-box-title">{product.description}</div>
                  <div className="product-box-price">{product.price}$</div>
                </div>
              </div>
            );
          })
        : items
            .filter(({ category }) => category === filter)
            .map((product, index) => {
              return (
                <div
                  className="product-box"
                  key={index}
                  onClick={() => {
                    navigate("/products", { replace: true, state: product.id });
                    window.scrollTo(0, 0);
                  }}
                >
                  <div
                    className="product-box-img"
                    style={{ backgroundImage: `url(${product.img})` }}
                  ></div>
                  <div className="product-box-details">
                    <div className="product-box-title">
                      {product.description}
                    </div>
                    <div className="product-box-price">{product.price}$</div>
                  </div>
                </div>
              );
            })}
    </>
  );
}
export default Product;
