import "./Filters.css";
import Button from "./Button";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

function Filters() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="filters-header">
          <div className="filters-box">
            <div className="go-back-box">
              <Button
                buttonContent="back-icon-img"
                clickEffect={() => {
                  navigate("/", { replace: true });
                }}
              />
              Home
            </div>
            <div className="filters-box-title">All</div>
          </div>
        </div>
        <div className="filters-links">
          <Button buttonContent="All" clickEffect={null} />
          <Button buttonContent="New Collection" clickEffect={null} />
          <Button buttonContent="Kitchen" clickEffect={null} />
          <Button buttonContent="Bathroom" clickEffect={null} />
          <Button buttonContent="Bedroom" clickEffect={null} />
          <Button buttonContent="Chairs" clickEffect={null} />
          <Button buttonContent="Lamps" clickEffect={null} />
        </div>
      </div>
      <div className="categories-products-box">
        <div className="container">
          <div className="categories-products-grid">
            <Product />
            {/* <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product /> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Filters;
