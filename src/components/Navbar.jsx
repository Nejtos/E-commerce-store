import Logo from "../img/logo.png";
import Cart from "../img/cart.png";
import "./Navbar.css"

function Navbar () {
    return(
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="nav-container">
                        <a href="/">
                            <img src={Logo} alt="logo" className="logo-img"/>
                        </a>
                        <div className="nav-links"> 
                        <a href="/categories">
                            <h1>Kategorie</h1>
                        </a>
                        <a href="/products">
                            <h1>Produkty</h1>
                        </a>
                        <img src={Cart} alt="cart" className="cart-img"/>
                        {/* <a href="/">
                            <img src={} alt="cart" class="cart-img"/>
                        </a> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
} export default Navbar;