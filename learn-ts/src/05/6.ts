{
  // 1. 타입선언 - 변수에 타입을 지정해야 한다
  // 2. 접근 제어자 - 속성이나, 메서드에 대한 접근을 제한하는 것, public, protected, private, #(ES2022)
  // 3. readonly
  // 4. 추상클래스 -> 클래스의 구조를 추상적으로 미리 정의해 놓은 클래스
  // 5. implements, 타입별칭이나 인터페이스
  // 6. 제네릭
  class Person {
    readonly name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello! ${this.name}, ${this.age}`);
    }
  }
  const person = new Person("sucoding", 20);
  console.log(person.name);
  console.log(person.age);
}
{
  abstract class Shape {
    abstract radius: number;
    abstract area(): number;
  }

  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    area() {
      return Math.PI * this.radius;
    }
  }
}
{
  interface Movable {
    move(): void;
  }
  interface Stopable {
    stop(): void;
  }
  type CarType = Movable & Stopable;
  class Car implements CarType {
    move() {
      console.log("run run!");
    }
    stop() {
      console.log("stop");
    }
  }
  const car: Car = new Car();
  car.move();
}
{
  // 제네릭
  class Box<T> {
    value: T;
    constructor(value: T) {
      this.value = value;
    }

    getValue() {
      return this.value;
    }
  }

  const stringBox: Box<string> = new Box<string>("abc");
  console.log(stringBox.getValue());

  const numberBox = new Box(123);
  console.log(numberBox.getValue());
}
