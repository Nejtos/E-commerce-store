import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/Cart";
import { CartContextProvider } from "./context/CartContextProvider";
import Notify from "./components/Notify";

function App() {
  return (
    <>
      <CartContextProvider>
        <Cart />
        <Notify />
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </CartContextProvider>
    </>
  );
}

export default App;
