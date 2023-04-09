import Product from "../components/Product";
import Trends from "../components/Trends";
import ProductInfo from "../components/ProductInfo";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function ProductPage() {
  const location = useLocation();

  return (
    <>
      <Product active={location.state} />
      <ProductInfo active={location.state} />
      <Trends />

      <Newsletter />
      <Footer />
    </>
  );
}
export default ProductPage;
