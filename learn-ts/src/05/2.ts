{
  // 1. 제네릭
  // 타입을 변수처럼 사용하는 문법
  function getFirstElement<T>(element: T[]): T {
    return element[0];
  }

  const r1 = getFirstElement<number>([1, 2, 3]); // 1
  const r2 = getFirstElement<string>(["A", "B", "C"]); // "A"
  const r3 = getFirstElement([true, false, true]); // true
  const r4 = getFirstElement([1, "A"]); // true
}
{
  // 함수 표현식(화살표 함수)
  const getFirstElement: <T>(element: T[]) => T = (element) => {
    return element[0];
  };
}
{
  // 타입 별칭
  // 재네릭(타입별칭)
  type MyFunc<T> = (element: T[]) => T;
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
  const r1 = getFirstElement([1, 2, 3]); // 1
  const r2 = getFirstElement(["A", "B", "C"]); // "A"
  const r3 = getFirstElement([true, false, true]); // true
  const r4 = getFirstElement([1, "A"]); // true
}
{
  // 타입 별칭
  // 타입을 변수에 저장한 것에 불과함
  type MyFunc = <T>(element: T[]) => T;
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  };
  const r1 = getFirstElement([1, 2, 3]); // 1
  const r2 = getFirstElement(["A", "B", "C"]); // "A"
  const r3 = getFirstElement([true, false, true]); // true
  const r4 = getFirstElement([1, "A"]); // true
}
{
  // 인터페이스로
  interface MyFunc<U> {
    (element: U[]): U;
  }
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
}
{
  interface MyFunc {
    <T>(element: T[]): T;
  }
  const getFirstElement: <T>(element: T[]) => T = (element) => {
    return element[0];
  };
}
