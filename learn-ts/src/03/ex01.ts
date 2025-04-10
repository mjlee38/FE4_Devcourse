{
  // 1
  // 함수 정의
  const add = (n1: number, n2: number) => n1 + n2;

  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15
}
{
  // 2
  // 함수 정의
  const greet = (name: string): void => console.log(`Hello, ${name}`);

  // 함수 호출
  const greeting = greet("Alice");
  console.log(greeting); // "Hello, Alice!"
}
{
  //3
  // 함수 정의
  const sumAll = (...nums: number[]): number => nums.reduce((sum, num) => sum + num, 0);

  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10
}

{
  // 4
  // 함수 정의
  const sum = (a: number, b: number = 0): number => a + b;

  // 함수 호출
  const result = sum(5);
  console.log(result); // 5
}

{
  // 5
  // 함수 정의
  const multiply = (a: number, b: number) => a * b;

  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20
}
{
  // 6
  // 함수 정의
  const concatStringAndNumber = (a: string, b: number): string => `${a}${b}`;

  // 함수 호출
  const result = concatStringAndNumber("Hello", 10);
  console.log(result); // "Hello10"
}
{
  // 7
  // 함수 정의
  const greet = (name: string, message: string = "welcome"): void => {
    console.log(`${message}, ${name}`);
  };

  // 함수 호출
  const greeting1 = greet("Alice", "Hello");
  const greeting2 = greet("Bob");
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"
}
{
  // 8
  // 함수 정의
  const findMax = (nums: number[]): number => Math.max(...nums);

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40
}
{
  // 9
  // 함수 정의
  const double = (n1: number): number => n1 * 2;

  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20
}
