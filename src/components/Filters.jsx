import "./Filters.css";
import Button from "./Button";
import FilteredProducts from "./FilteredProducts";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Filters({ filterSettings }) {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(filterSettings);

  const checkActiveFilter = () => {
    console.log(activeFilter)
    let style = ""
    {activeFilter ? style =  {outline: "1px solid rgba(0,0,0,.6)"} : style = {} }
    return style;
  }

  return (
    <>
      <div className="categories-page-container">
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
              <div className="filters-box-title">
                {activeFilter === null ? "All" : activeFilter}
              </div>
            </div>
          </div>
          <div className="filters-links">
            <Button
              buttonContent="All"
              clickEffect={() => {
                setActiveFilter("all");
              }}
              style={activeFilter === "all" || activeFilter === null ? {outline: "1px solid rgba(0,0,0,.6)"} : {} }
            />
            <Button
              buttonContent="New Collection"
              clickEffect={() => {
                setActiveFilter("new collection");
              }}
              style={activeFilter === "new collection" ? {outline: "1px solid rgba(0,0,0,.6)"} : {} }
            />
            <Button
              buttonContent="Kitchen"
              clickEffect={() => {
                setActiveFilter("kitchen");
              }}
              style={activeFilter === "kitchen" ? {outline: "1px solid rgba(0,0,0,.6)"} : {} }
            />
            <Button
              buttonContent="Bathroom"
              clickEffect={() => {
                setActiveFilter("bathroom");
              }}
              style={activeFilter === "bathroom" ? {outline: "1px solid rgba(0,0,0,.6)"} : {} }
            />
            <Button
              buttonContent="Bedroom"
              clickEffect={() => {
                setActiveFilter("bedroom");
              }}
              style={activeFilter === "bedroom" ? {outline: "1px solid rgba(0,0,0,.6)"} : {} }
            />
            <Button
              buttonContent="Chairs"
              clickEffect={() => {
                setActiveFilter("chairs");
              }}
              style={activeFilter === "chairs" ? {outline: "1px solid rgba(0,0,0,.6)"} : {} }
            />
            <Button
              buttonContent="Lamps"
              clickEffect={() => {
                setActiveFilter("lamps");
              }}
              style={activeFilter === "lamps" ? {outline: "1px solid rgba(0,0,0,.6)"} : {} }
            />
          </div>
        </div>
        <div className="categories-products-box">
          <div className="container">
            <div className="categories-products-grid">
              {activeFilter === null ? (
                <FilteredProducts filter={"all"} />
              ) : (
                <FilteredProducts filter={activeFilter} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Filters;
