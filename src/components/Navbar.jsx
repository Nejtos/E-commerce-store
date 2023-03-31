import Logo from "../img/logo.png";
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
            <a href="/">
              <img src={Logo} alt="logo" className="logo-img" />
            </a>
            <div className="nav-links">
              <Button
                buttonContent="Categories"
                clickEffect={() => {
                  navigate("/categories", { replace: true });
                }}
              />
              <Button
                buttonContent="Products"
                clickEffect={() => {
                  navigate("/products", { replace: true });
                }}
              />
              {/* <a href="/products">
                <h1>Produkty</h1>
              </a> */}
              <img src={Cart} alt="cart" className="cart-img" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
