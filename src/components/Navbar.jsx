import Cart from "../img/cart.png";
import "./Navbar.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-container">
            <Button
                buttonContent="logo-img"
                clickEffect={() => {
                  navigate("/", { replace: true });
                  window.scrollTo(0, 0);
                }}
            />
            <div className="nav-links">
              <Button
                buttonContent="Categories"
                clickEffect={() => {
                  navigate("/categories", { replace: true });
                  window.scrollTo(0, 0);
                }}
              />
              <Button
                buttonContent="Products"
                clickEffect={() => {
                  navigate("/products", { state: 1, replace: true });
                  window.scrollTo(0, 0);
                }}
              />
              <img src={Cart} alt="cart" className="cart-img" onClick={ () => { document.querySelector(".cart").classList.add("active")} }/>
              <div className="cart-items-counter">99</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
