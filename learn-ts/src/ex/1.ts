{
  // 1
  function sumArray<T>(arr: T[], initial: T, combiner: (a: T, b: T) => T): T {
    return arr.reduce(combiner, initial);
  }

  console.log(sumArray([1, 2, 3], 0, (a, b) => a + b)); // 6
  console.log(sumArray(["Hello", "World"], "", (a, b) => a + b)); // "HelloWord"
}
{
  // 2
  function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
  }

  console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
  console.log(reverseArray(["a", "b"]));
}
{
  // 3
  function removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }

  console.log(removeDuplicates([1, 2, 2, 3])); // [1, 2, 3]
}
{
  // 4
  function setDefault<T extends object>(obj: T): T {
    return { ...obj, age: (obj as any).age || 18 };
  }

  console.log(setDefault({ name: "Alice", age: 0 })); // { name: "Alice", age: 18 }
  console.log(setDefault({ name: "Alice" })); // { name: "Alice", age: 18 }
}
{
  // 5
  function hasKey<T extends object>(obj: T, key: PropertyKey): boolean {
    return key in obj;
  }

  const person = { name: "Alice", age: 30 };
  console.log(hasKey(person, "name")); // true
  console.log(hasKey(person, "address")); // false
}
{
  // 6
  function convertToString<T>(arr: T[]): string[] {
    return arr.map((num) => String(num));
  }

  console.log(convertToString([1, 2, 3])); // ["1", "2", "3"]
}
{
  // 7
  function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  const obj1 = { name: "John" };
  const obj2 = { age: 25 };
  console.log(mergeObjects(obj1, obj2)); // { name: "John", age: 25 }
}
{
  // 8
  function isPositive<T>(value: T, validator: (val: T) => boolean): boolean {
    return validator(value);
  }

  console.log(isPositive(10, (n) => n > 0)); // true
  console.log(isPositive([1, 2, 3], (n) => n.length > 0)); // true
}
