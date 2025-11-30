import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  //Mensaje de renderizado
  console.log("render");
  //API..., FETCH...

  const [count, setCount] = useState(value);

  const handleAdd = () => {
    //console.log(event);
    //setCount((c) => c + 1);
    setCount(count + 1);
  };

  const handleSubstraction = () => setCount(count - 1);
  const handleReset = () => setCount(value);

  return (
    <>
      <h1>CounterApp</h1>
      <div>{count}</div>

      {/* <button onClick={(event) => handleAdd(event)}>+1</button> */}
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstraction}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
