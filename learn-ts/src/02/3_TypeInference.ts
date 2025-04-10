{
  // 타입 추론
  // 변수에 할당되는 값을 보고 타입스크립트 컴파일러가 타입을 추론해주는 현상
  let num = 10;
  let name = "Hello";
  let bool = true;

  let unde = undefined;
  let nul = null;

  let symbol = Symbol("a");
  let numArr = [1, 2, 3];
  let obj = {name: "sucoding", age: 20};
  let big = 100n;

  // ↑↑↑ 타입 지정 안했는데 왜 오류 안생김??? -> "타입 추론" 때문
}
