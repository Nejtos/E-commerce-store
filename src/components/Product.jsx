import "./Product.css";
import { useState, useContext, useEffect } from "react";
import Button from "./Button";
import { items } from "./Data";
import { CartContext } from "../context/cartContext";

function Product({ active }) {
  const [counter, setCounter] = useState(0);
  const [activeImage, setActiveImage] = useState("");
  const { cartItems, addToCart, updateCartItemCounter } = useContext(CartContext);

  const addToCounter = () => {
     items
    .filter(({ id }) => id === active)
    .map((product) => {
      cartItems[product.id] === 0 ? setCounter(counter + 1) : updateCartItemCounter(product.id, counter + 1)
    });
    // setCounter(counter + 1);
  };

  const subToCounter = () => {
    items
    .filter(({ id }) => id === active)
    .map((product) => {
      cartItems[product.id] === 0 ? counter - 1 > 0 ? setCounter(counter - 1) : setCounter(0) : updateCartItemCounter(product.id, counter - 1)
    });
    // counter - 1 > 0 ? setCounter(counter - 1) : setCounter(0);
  };

  useEffect(() => {
    setActiveImage("")
    items
      .filter(({ id }) => id === active)
      .map((product) => {
        setCounter(cartItems[product.id]);
      });
  }, [cartItems, active]);

  return (
    <>
      {items
        .filter(({ id }) => id === active)
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
                    <div className="quantity-details-box">
                      <div className="quantity-details-text">Quantity:</div>
                      <div className="quantity-buttons">
                        <Button buttonContent="-" clickEffect={subToCounter} />
                        <div className="quantity-counter" value={counter}>
                          {cartItems[product.id] === 0
                            ? counter
                            : cartItems[product.id]}
                        </div>
                        <Button buttonContent="+" clickEffect={ addToCounter} />
                      </div>
                      <div className="quantity-details-text">
                        {product.price}$
                      </div>
                    </div>
                    <div className="quantity-extra-buttons">
                      <Button
                        buttonContent="ADD TO CART"
                        clickEffect={() =>
                          addToCart(
                            product.id,
                            document
                              .querySelector(".quantity-counter")
                              .getAttribute("value")
                          )
                        }
                      />
                      <Button buttonContent="BUY NOW" clickEffect={null} />
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
export default Product;
