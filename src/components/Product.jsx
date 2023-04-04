import "./Product.css";
import { items } from "./Data";

function Product() {
  return (
    <>
    {items.map((product, index) => { 
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
  // return (
  //   <>
  //     <div className="product-box">
  //       <div className="product-box-img"></div>
  //       <div className="product-box-details">
  //         <div className="product-box-title">Modern Chair</div>
  //         <div className="product-box-price">100$</div>
  //       </div>
  //     </div>
  //   </>
  // );
}
export default Product;
