import { useRef } from "react";
import Input from "./components/Input";

export default function App() {
  const inputEl = useRef<HTMLInputElement>(null);
  const focus = () => {
    inputEl.current?.focus();
  };
  return (
    <>
      <Input ref={inputEl} />
      <button onClick={focus}>포커스</button>
    </>
  );
}
