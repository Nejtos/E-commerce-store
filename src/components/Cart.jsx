import "./Cart.css";
import Button from "./Button";

function Cart() {
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
          <div className="cart-box">
            <div className="cart-product-img"></div>
            <div className="cart-details-box">
              <div className="cart-product-title">
                Chair
                <div className="cart-price">25$</div>
              </div>

              <div className="cart-btns">
                <div className="cart-btn-group">
                  <Button buttonContent="∨" clickEffect={null} />
                  <div className="cart-quantity-counter">1</div>
                  <Button buttonContent="∧" clickEffect={null} />
                </div>
                <div className="btn-product-remove"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="total">
          <div className="total-title">Total Price:</div>
          <div className="total-price">0$</div>
        </div>
        <div className="total-btn">
          <Button buttonContent="Checkout" clickEffect={null} />
        </div>
      </div>
    </>
  );
}
export default Cart;
