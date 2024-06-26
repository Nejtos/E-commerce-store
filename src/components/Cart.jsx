import "./Cart.css";
import Button from "./Button";
import { items } from "./Data";
import { CartContext } from "../context/CartContext.jsx";
import { useContext } from "react";
import { toast } from "react-toastify";

function Cart() {
  const {
    cartItems,
    increaseItemValue,
    decreaseItemValue,
    removeFromCart,
    updateCartItemCounter,
  } = useContext(CartContext);

  const cartValue = () => {
    let totalPrice = 0;
    let amount = 0;
    for (let i = 1; i < items.length + 1; i++) {
      let data = items[i - 1];
      if (cartItems[i] !== 0) {
        amount = cartItems[i];
        totalPrice += amount * data.price;
      }
    }
    return totalPrice.toFixed(2);
  };

  const removingNotify = () =>
    toast.error("Item(s) has been removed from the cart!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const checkoutNotify = () =>
    toast.info("Thank you for shopping in our store!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const warningNotify = () =>
    toast.warning("The shopping cart is empty!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const removeCart = () => {
    let size = 0;
    for (let i = 1; i < items.length + 1; i++) {
      if (cartItems[i] !== 0) {
        size += 1;
      }
    }
    size !== 0
      ? (checkoutNotify(),
        sessionStorage.removeItem("cart"),
        setTimeout(() => window.location.reload(), 3000))
      : warningNotify();
  };

  return (
    <>
      <div className="cart">
        <div className="cart-header">
          <div className="cart-title">Your Cart</div>
          <div
            className="btn-close-cart"
            onClick={() => {
              document.querySelector(".cart").classList.remove("active");
            }}
          ></div>
        </div>
        <div className="cart-container">
          {items.map((product, index) => {
            if (cartItems[product.id] !== 0) {
              return (
                <div className="cart-box" key={index}>
                  <div
                    className="cart-product-img"
                    style={{ backgroundImage: `url(${product.img})` }}
                  ></div>
                  <div className="cart-details-box">
                    <div className="cart-product-title">
                      {product.description}
                      <div className="cart-price">{product.price}$</div>
                    </div>

                    <div className="cart-btns">
                      <div className="cart-btn-group">
                        <Button
                          buttonContent="∨"
                          clickEffect={() => decreaseItemValue(product.id)}
                        />
                        <div
                          className="cart-quantity-counter"
                          onChange={(e) => {
                            updateCartItemCounter(e.target.value);
                          }}
                        >
                          {cartItems[product.id]}
                        </div>
                        <Button
                          buttonContent="∧"
                          clickEffect={() => increaseItemValue(product.id)}
                        />
                      </div>
                      <div
                        className="btn-product-remove"
                        onClick={() => {
                          removeFromCart(product.id);
                          removingNotify();
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="total">
          <div className="total-title">Total Price:</div>
          <div className="total-price">{cartValue()}$</div>
        </div>
        <div className="total-btn">
          <Button buttonContent="Checkout" clickEffect={() => removeCart()} />
        </div>
      </div>
    </>
  );
}
export default Cart;
