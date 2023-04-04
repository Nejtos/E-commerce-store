import "./Product.css";
import { items } from "./Data";

function Bestsellers() {
  return (
    <>
    {items.filter(({ category }) => category === "new collection" || category === "lamps").map((product, index) => { 
      return <div className="product-box" key={index}>
        <div className="product-box-img" style={{backgroundImage: `url(${product.img})` }}></div>
        <div className="product-box-details">
          <div className="product-box-title">{product.description}</div>
          <div className="product-box-price">{product.price}$</div>
        </div>
      </div>
    })}
    </>
  );
}
export default Bestsellers;
