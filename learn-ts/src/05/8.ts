{
  // 유틸리티 타입
  // -> 어떤 목적을 달성하기 위한 기능을 구현한 커스텀 타입
  // 1. Partial<T>
  // -> 주어진 타입 T의 모든 속성을 선택적으로 만드는 유틸리티 타입
  interface User {
    name: string;
    age: number;
    gender: string;
  }

  const user1: User = {
    name: "sucoding",
    age: 20,
    gender: "male",
  };

  const guest1: Partial<User> = {
    name: "guest1",
  };

  const guest2: Partial<User> = {
    age: 20,
  };
}
{
  // 2 Required<T>
  // 주어진 타입 T 모두 필수 속성으로 만드는 것
  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const normalUser: User = {
    name: "sucoding",
    gender: "male",
  };

  const adultUser: Required<User> = {
    name: "sucoding",
    age: 20,
    gender: "male",
  };
}
{
  // 3. Readonly<T>
  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const premiumUser: Readonly<User> = {
    name: "sucoding",
    age: 20,
    gender: "male",
  };
}
{
  // 4. Pick<T, K>
  // 주어진 타입 T에서 선택한 속성만 추출하여 새로운 타입
  interface User {
    name: string;
    age?: number;
    gender: string;
  }

  const nameObject: Pick<User, "age"> = {};
}
{
  // 5. Omit<T, K>
  // 주어진 타입 T에서 특정 속성 K를 제외한 나머지 속성만 추출
  interface User {
    name: string;
    age?: number;
    gender: string;
  }

  const user: Omit<User, "gender"> = {
    name: "sucoding",
  };
}
{
  // 6. Record<K, T>
  // 주어진 키 K와 값 T의 타잉블 가지는 객체 타입을 생성 할 때 쓰는 것
  let obj3: Record<string, never> = {};
  const score: { math: number; english: number; science: number } = {
    math: 90,
    english: 90,
    science: 70,
  };
  const score2: Record<string, number> = {
    math: 90,
    english: 90,
    science: 70,
  };
}
{
  // 7. 객체에하는 존재하는 속성을 제거할 때는 Omit
  // 71. 유니언 타입에서 속성을 제거할 때 사용하는건 Exclude
  type MyType = "a" | "b" | "c";
  const result: Exclude<MyType, "a" | "c"> = "b";
}
{
  // 8.NonNullable<T>
  // 주어진 타입에서 null과 undefined 타입을 제외하고 생성
  type MyType = string | number | undefined | null;
  type NonType = NonNullable<MyType>;
}
{
  // 9. ReturnType<T>
  // 주어진 함수 타입 T의 반환 타입을 추출
  type Age = ReturnType<typeof getAge>; // number
  type AgeFunc = typeof getAge;
  function getAge() {
    return { name: "sucoding" };
  }
}
