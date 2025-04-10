{
  let num1 = 10;
  let name = "Hello";
  let bool = true;

  let unde = undefined;
  let nul = null;

  let symbol = Symbol("a");
  let numArr = [1, 2, 3];
  let obj1 = {name: "sucoding", age: 20};
  let big = 100n;

  // 왜 재할당이 안되는데도 const로 하지 않았지 ?
  // const로 데이터를 정의하게 되면, const를 사용해서 선언한 변수에 할당된 데이터는 굉장히 특별한 타입으로 변경이 되어버림.

  // 리터럴 타입 -> 값 자체를 타입으로 사용하는 것
  const num: 10 = 10; // 이렇게 선언하면, num은 number가 아닌 10 으로 추론됨
  const obj: {name: string} = {name: "sucoding"};
}
{
  let bool: true = true;
  // bool = false; ❌ 리터럴 타입으로 타입 지정 시, 재할당 불가능 !

  let num: 5 = 5;
  // num = 10;     ❌ 리터럴 타입으로 타입 지정 시, 재할당 불가능 !
}
