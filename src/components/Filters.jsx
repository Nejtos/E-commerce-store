import "./Filters.css";
import Button from "./Button";
import Product from "./Product";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Filters({ filterSettings }) {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(filterSettings);

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
                  window.scrollTo(0, 0);
                }}
              />
              Home
            </div>
            <div className="filters-box-title">{activeFilter === null ? "All" : activeFilter}</div>
          </div>
        </div>
        <div className="filters-links">
          <Button
            buttonContent="All"
            clickEffect={() => {
              setActiveFilter("all");
            }}
          />
          <Button
            buttonContent="New Collection"
            clickEffect={() => {
              setActiveFilter("new collection");
            }}
          />
          <Button
            buttonContent="Kitchen"
            clickEffect={() => {
              setActiveFilter("kitchen");
            }}
          />
          <Button
            buttonContent="Bathroom"
            clickEffect={() => {
              setActiveFilter("bathroom");
            }}
          />
          <Button
            buttonContent="Bedroom"
            clickEffect={() => {
              setActiveFilter("bedroom");
            }}
          />
          <Button
            buttonContent="Chairs"
            clickEffect={() => {
              setActiveFilter("chairs");
            }}
          />
          <Button
            buttonContent="Lamps"
            clickEffect={() => {
              setActiveFilter("lamps");
            }}
          />
        </div>
      </div>
      <div className="categories-products-box">
        <div className="container">
          <div className="categories-products-grid">
            {activeFilter === null ? <Product filter={"all"}/> : <Product filter={activeFilter}/> }
          </div>
        </div>
      </div>
    </>
  );
}
export default Filters;
