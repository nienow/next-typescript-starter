import React from "react";
import useCounter from "../hooks/useCounter";
import ActionButton from "./ActionButton";

const Counter = () => {
  const {count, add} = useCounter();

  return <div>
    <div>Count is {count}</div>
    <ActionButton onClick={add}>Add</ActionButton>
  </div>
}

export default Counter
