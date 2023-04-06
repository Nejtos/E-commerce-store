import "./Categories.css"
import Filters from "../components/Filters";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { useLocation } from "react-router-dom";

function Categories() {
  const locate = useLocation();
  return (
    <>
      <div className="categories-page-container">
        <Filters filterSettings={locate.state}/>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
export default Categories;
