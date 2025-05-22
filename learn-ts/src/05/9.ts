{
  // 조건부
  // T extends U ? X : Y
  type IsString<T> = T extends string ? "Yes" : "No"; // "Yes" | "No"

  type A = IsString<string>; // "Yes"
  type B = IsString<number>; // "No"

  const a: A = "Yes";
  const b: B = "No";
}

{
  // 조건부 + infer
  type ElementType<T> = T extends (infer U)[] ? U : T;

  type A = ElementType<10>;
  type B = ElementType<[1, 2, 3]>; // number[] -> number
  type C = ElementType<["a", "b"]>; // string[] -> string
  type D = ElementType<[true, false]>; // boolean[] -> boolean
}
{
  //
  type ReturnTyped<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : any;

  type AgeFunc = ReturnTyped<typeof getAge>;
  function getAge() {
    return { name: "sucoding" };
  }
}
