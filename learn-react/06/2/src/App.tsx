import { useState } from "react";
import b_off from "./assets/images/b_off.png";
import b_on from "./assets/images/b_on.png";
export default function App() {
  const [lamp, setLamp] = useState(false);
  const lampToggleHandler = () => {
    setLamp((lamp) => !lamp);
  };
  return (
    <>
      {/* <img
        src={lamp ? b_on : b_off}
        alt={lamp ? "전구 on" : "전구 off"}
        onClick={lampToggleHandler}
      /> */}
      {lamp && <img src={b_on} alt="전구 on" onClick={lampToggleHandler} />}
      {!lamp && <img src={b_off} alt="전구 on" onClick={lampToggleHandler} />}
    </>
  );
}
