// import Button from "./components/html/Button";
import Input from "./components/html/Input";

export default function App() {
  return (
    <>
      <div className="item-middle">
        <Input type="text" className="input-style" />
        <Input type="password" className="input-style" />
        <Input className="input-style" disabled />
      </div>
    </>
  );
}
