import Filters from "../components/Filters";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { useLocation } from "react-router-dom";

function Categories() {
  const locate = useLocation();
  return (
    <>
      <Filters filterSettings={locate.state}/>
      <Newsletter />
      <Footer />
    </>
  );
}
export default Categories;
