{
  let value: number | string = 10.12;
  console.log(value.toFixed(0));
}
{
  function printValue(value: number | string) {
    // 타입가드 -> 타입을 좁혀주는 조건문 또는 문법
    // if (typeof value === "number") console.log(value.toFixed(0));

    // 타입 단언 -> 타입스크립트 컴파일러에게 타입을 명확하게 알려주는 행위
    // 타입단언 -> as 단언할 타입
    console.log((value as number).toFixed(0));
    // <단언할타입> -> 리액트에서 사용할 수 없다. JSX 문법과 충돌
    console.log((<number>value).toFixed(0));
  }
  printValue("aaa");
  // tsc가 타입 검사를 아예 수행하지 않게됨.
  // 이 경우 숫자가 아니더라도, 숫자처럼 확신해서 수행함
  // 런타임에 에러가 발생할 수 있는 위험이 있다. -> ts의 장점 무효화
}
{
  // 타입 단언에 interface나 타입 별칭으로 정의한 타입도 가능함
  type User = {
    name: string;
  };
  type Car = {
    speed: number;
  };
  const user: User = {
    name: "sucoding",
  };
  const car: Car = {
    speed: 100,
  };
  // console.log(user.speed) // user에는 speed 없으니까 error
  function printValue(obj: User | Car) {
    console.log((obj as Car).speed);
  }
  printValue(user); // undefined -> tsc 가 타입 검사를 아예 수행하지 않아 의도치 않게 undefined가 나와버림
  // console.log(user | car); // 이런식으로 전역적으로 사용은 불가능함.
}
{
  // 💡 널 아님 보장 연산자 (!, non-null assertion operator)
  function printValue(value: number | null) {
    // console.log(value.toFixed(2)); // ❌ 오류 발생 value는 null도 가능한데 toFixed? 절대 안되지 !
    // if (typeof value === "number")
    // console.log(value?.toFixed(2));
    console.log(value!.toFixed(2)); // value! : value가 절대 null이 아닐거라고 보장시키는것!
  }
  printValue(null); // value? : undefined, value! : error
  // 타입단언의 한 종류라서 컴파일러가 해당 부분의 검증을 수행하지 않기 때문에 런타임 때 에러 발생할 위험이 있다.
}
{
  const element = document.querySelector("button") as HTMLButtonElement; //
}
