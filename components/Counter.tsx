import React from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
    const {count, add} = useCounter();

    return <div>
        <div>Count is {count}</div>
        <button onClick={add}>Add</button>
    </div>
}

export default Counter