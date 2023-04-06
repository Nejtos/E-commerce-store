import "./Product.css";
import { items } from "./Data";
import { useNavigate } from "react-router-dom";

function Bestsellers() {
  const navigate = useNavigate();
  return (
    <>
      {items
        .filter(
          ({ category }) =>
            category === "new collection" || category === "lamps"
        )
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
                <div className="product-box-title">{product.description}</div>
                <div className="product-box-price">{product.price}$</div>
              </div>
            </div>
          );
        })}
    </>
  );
}
export default Bestsellers;
