import "./Quantity.css";
import { useState } from "react";
import Button from "./Button";

function Quantity() {

  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSub = () => {
    { (counter-1 > 0) ? setCounter(counter - 1) : setCounter(0)}
  };

  return (
    <>
      <div className="quantity-details-box">
        <div className="quantity-details-text">Quantity:</div>
        <div className="quantity-buttons">
          <Button buttonContent="-" clickEffect={handleSub} />
          <div className="quantity-counter">{counter}</div>
          <Button buttonContent="+" clickEffect={handleAdd} />
        </div>
        <div className="quantity-details-text">Price: 120.99$</div>
      </div>
      <div className="quantity-extra-buttons">
        <Button buttonContent="ADD TO CART" clickEffect={handleAdd} />
        <Button buttonContent="BUY NOW" clickEffect={handleAdd} />
      </div>
    </>
  );
}
export default Quantity;
