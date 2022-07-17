import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log(`before setState: ${count}`);

    setCount(count + 1);
    setCount(count + 1);

    console.log(`after setState: ${count}`);

    // console.log(count +" " + setCount);
  }

  return <button onClick={increment}>{count}</button>;
}

export default Counter;
