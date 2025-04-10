{
  // 1. 간단한 객체 타입 정의
  interface Person {
    name: string;
    age: number;
  }
  const person: Person = {
    name: "김ㅇㅇ",
    age: 20,
  };
}
{
  // 2. 메소드가 포함된 인터페이스
  interface Car {
    brand: string;
    model: string;
    start(): void; // 자동차를 시작하는 메소드...가 뭐지...?
  }
  const car: Car = {
    brand: "mini",
    model: "Countryman",
    start() {
      console.log("자동차 시작..?");
    },
  };
}
{
  // 3. 선택적 속성 사용
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
  const emplyee1: Employee = {
    name: "김ㅇㅇ",
    position: "점장",
    department: "더현대",
  };
  const emplyee2: Employee = {
    name: "이ㅇㅇ",
    position: "점원",
  };
}
{
  // 4. 배열을 포함한 인터페이스
  interface Team {
    name: string;
    members: string[];
  }
  const team: Team = {
    name: "Eagles",
    members: ["류현진", "김태균", "정은원"],
  };
}
{
  // 5. 상속을 이용한 인터페이스 확장
  interface Animal {
    name: string;
    age: number;
  }
  interface Dog extends Animal {
    breed: string;
  }
  const maeum: Dog = {
    name: "이마음",
    age: 5,
    breed: "Golden Retriever",
  };
}
{
  // 6. 인터페이스에서 메소드 정의
  interface Person {
    name: string;
    age: number;
    greet(): void;
  }
  const person: Person = {
    name: "송ㅇㅇ",
    age: 20,
    greet() {
      console.log(`Hello, my name is ${person.name}`);
    },
  };
  person.greet();
}
{
  // 7. 다형성을 가진 인터페이스
  interface Shape {
    area(): void;
  }
  interface Circle extends Shape {
    radius: number;
  }
  interface Rectangle extends Shape {
    width: number;
    height: number;
  }
}
{
  // 8. 다중 인터페이스를 사용하는 객체
  interface Person {
    name: string;
    age: number;
  }
  interface Address {
    street: string;
    city: string;
    zipcode: number;
  }
  type Contact = Person & Address;
}
{
  // 9. 인터페이스에 인덱스 시그니처 사용
  interface Dictionary {
    string: string;
  }

  // 10. 인터페이스를 사용한 함수 타입 정의
  interface Operation {
    (n1: number, n2: number): number;
  }
  const add: Operation = (n1, n2) => {
    return n1 + n2;
  };
  const subtract: Operation = (n1, n2) => {
    return n1 - n2;
  };
}
