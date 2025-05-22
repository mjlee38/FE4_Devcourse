{
  // 제네릭 타입 제약 조건
  // extends
  function getLength<T extends { length: number }>(value: T): number {
    return value.length;
  }

  getLength([1, 2]); // ok
  getLength("abc"); // ok , 래퍼 객체
  // getLength(10); // not ok
}

{
  // 6. 키 선택 타입 별칭
  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
  const key: PersonOfKeys = "gender";

  const car = {
    speed: 100,
  };

  type CarOfKeys = typeof car;
}

{
  function returnTuple<T, U>(a: U, b: T): [U, T] {
    return [a, b];
  }
  const r1 = returnTuple(1, 2); // [1, 2] -> [number, number]
  const r2 = returnTuple(1, "a"); // [1, 'a'] -> [number, string]
}
