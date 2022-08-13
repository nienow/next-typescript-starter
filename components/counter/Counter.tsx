import React from "react";
import useCounter from "../../hooks/useCounter";
import ActionButton from "../ActionButton";
import ResetButton from "./ResetButton";

const Counter = () => {
  const {count, add, reset} = useCounter();

  return <div>
    <div>Count is {count}</div>
    <ActionButton onClick={add}>Add</ActionButton>
    <ResetButton resetFn={reset}></ResetButton>
  </div>
}

export default Counter
