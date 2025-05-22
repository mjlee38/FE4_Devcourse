import { useState } from "react";

// useState 상태
export default function State() {
  // count - 상태 값
  // setCount - 상태 업데이트 함수
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={increment}>+</button>
    </>
  );
}
