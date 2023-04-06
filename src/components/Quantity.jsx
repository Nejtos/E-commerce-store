import "./Quantity.css";
import { useState } from "react";
import Button from "./Button";
import { items } from "./Data";

function Quantity({ active }) {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSub = () => {
    {
      counter - 1 > 0 ? setCounter(counter - 1) : setCounter(0);
    }
  };

  return (
    <>
      {items
        .filter(({ id }) => id === active)
        .map((product, index) => {
          return (
            <div key={index}>
              <div className="quantity-details-box">
                <div className="quantity-details-text">Quantity:</div>
                <div className="quantity-buttons">
                  <Button buttonContent="-" clickEffect={handleSub} />
                  <div className="quantity-counter">{counter}</div>
                  <Button buttonContent="+" clickEffect={handleAdd} />
                </div>
                <div className="quantity-details-text">{product.price}$</div>
              </div>
            </div>
          );
        })}
    </>
  );
}
export default Quantity;
