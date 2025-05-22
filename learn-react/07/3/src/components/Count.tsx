import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0); // undefined -> 0
  useEffect(() => {
    console.log("Count Mounted!");

    return () => {
      // ...
      console.log("Count Unmounted!");
    };
  }, []);

  useEffect(() => {
    console.log("count values: " + count);
  }, [count]); // count

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </>
  );
}
