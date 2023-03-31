import "./Quantity.css";
import { useState } from "react";

function Quantity() {

    const [counter, setCounter] = useState(0);
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSub = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="quantity-details-box">
        Quantity
        <div className="quantity-buttons">
            <button onClick={handleSub}>Subtract 1</button>
            <h1>{counter}</h1>
            <button onClick={handleAdd}>Add 1</button>
        </div>
        Price: 120.99$
      </div>
      <div className="quantity-extra-buttons">
        <button onClick={handleSub}>Subtract 1</button>
        <button onClick={handleSub}>Subtract 1</button>
      </div>
    </>
  );
}
export default Quantity;