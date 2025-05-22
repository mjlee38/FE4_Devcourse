// 체크박스
// 다중 선택이 전제가 됨
// 라디오

import {useState} from "react";

// 단일 선택이 전제가 됨
export default function App() {
  // []
  // ['apple']
  // ['apple', 'banana']
  // ['apple', 'orange']
  // map, filter
  // 배열이나 객체
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const changeSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedFruits((selectedFruits) =>
      selectedFruits.includes(value)
        ? selectedFruits.filter((fruit) => fruit !== value)
        : [...selectedFruits, value]
    );
  };

  const [radio, setRadio] = useState("female");
  const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };
  return (
    <>
      <p>선택된 과일: {selectedFruits.join(",")}</p>
      <label style={{display: "block"}}>
        <input
          type='checkbox'
          value='apple'
          checked={selectedFruits.includes("apple")}
          onChange={changeSelectHandler}
        />
        apple
      </label>
      <label style={{display: "block"}}>
        <input
          type='checkbox'
          value={"banana"}
          checked={selectedFruits.includes("banana")}
          onChange={changeSelectHandler}
        />
        banana
      </label>
      <label style={{display: "block"}}>
        <input
          type='checkbox'
          value={"orange"}
          checked={selectedFruits.includes("orange")}
          onChange={changeSelectHandler}
        />
        orange
      </label>
      <hr />
      <h1>radio: {radio}</h1>
      <input
        type='radio'
        name='gender'
        value='male'
        checked={radio === "male"}
        onChange={radioChangeHandler}
      />{" "}
      male
      <br />
      <input
        type='radio'
        name='gender'
        value='female'
        checked={radio === "female"}
        onChange={radioChangeHandler}
      />{" "}
      female
    </>
  );
}
