import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../CounterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const res = useSelector(y => y.counter.value);
  console.log(res);
  return (
    <div>
      <div>{res}</div>
      <button onClick={() => dispatch(increment())}>++++</button>
      <button onClick={() => dispatch(decrement())}>----</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
};

export default Counter;
