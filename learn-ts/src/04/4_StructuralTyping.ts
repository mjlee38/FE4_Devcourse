{
  // 헝가리안 표기법 (hungarian notation)

  // 1.
  // type User = {};
  // interface User {}

  // const user: User = {}; // 이름만 보고는 타입 별칭으로 정의한 타입인지, interface로 정의한 타입인지 알 수 없음
  /*
    마이크로 소프트의 헝가리 출신 개발자가 식별자 앞에 그 식별자를 구분할 수있는 프리픽스(접두사)를 붙이자고 아이디어 냄
    number -> nNumber
    num -> fNumber (float? 정수? 일단 js에는 없는 자료형임)
    name -> strName
    -> * 헝가리안 표기법 *
    인터페이스, 타입 별칭도 I, T 붙여서 지었었음 (옛날에는)
  */
  type TUser = {};
  interface IUser {}

  const user: IUser = {};

  // 오늘날에는 사용하지 않도록 권장하는 추세
  let strName = "sucoding";
  // strName = ["sucoding", "john"]; // ts라 에러가 뜨는거지, js에서는 문제없이 재할당 됨
  // 처음 변수를 지을 때와 다른 타입의 개체를 변수에 재할당했을 때, 문제가 생김
  // 오늘날의 추세 -> 식별자의 이름을 의미있게 잘 지어주는 게 추세
  type Usre = {};
  type Car = {};
  type Color = {};
}
{
  //
  interface User {
    name: string;
  }
  interface Car {
    speed: number;
  }
  const user: User = {name: "sucoding"};
  const car: Car = {speed: 100};

  function printValue1(obj: User) {
    console.log(obj.name);
  }
  printValue1(user); // User 타입인 것만 전달 가능
  // printValue1(car);  // ❌ type error 발생 -> 해결하려면 union type으로 연결

  function printValue2(obj: User | Car) {
    // console.log(obj.name);  -> 문제가 생김 name을 출력할 수 없게됨

    // type guard 사용
    if ("name" in obj) console.log(obj.name); // 여기 obj는 User 타입으로 추론 됨
    else console.log(`${obj.speed}`); // 여기 obj는 Car 타입으로 추론 됨
  }
}
// 만약 Car 프로퍼티에 name 프로퍼티가 들어가면..?
{
  // 💡 구별된 유니온 (Discriminated Union) 타입
  // 유니온 타입으로 연결된 매개변수 타입을 구별? 구분?할 때, 중복되지 않는 속성으로 타입가드를 작성하는 것
  interface User {
    name: string;
  }
  interface Car {
    name: string;
    speed: number;
  }
  const user: User = {name: "sucoding"};
  const car: Car = {name: "bmw", speed: 100};
  function printValue2(obj: User | Car) {
    // type guard 사용
    // if ("name" in obj) console.log(obj.name); // 이 타입 가드가 힘을 발휘하지 못함. name 이라는 프로퍼티는 User, Car 모두에게 있어서, 이 둘을 구분할 수 있는 지표가 되지 않음
    // else console.log(`${obj.speed}`); // ❌ type error 발생 (앞의 if문에서 걸러지지 않아서)

    // 그럼 어떻게? -> 중복되지 않는 속성으로 타입 가드 다시 짜야 함!
    if ("speed" in obj) console.log(`${obj.speed}`);
    else console.log(obj.name);
  }
}
{
  type Car = {
    name: string;
    speed: number;
  };

  type Vehicle = {
    name: string;
    speed: number;
  };

  let car: Car = {name: "bmw", speed: 100};
  let vehicle: Vehicle = {name: "honda", speed: 200};

  // 💡 구조적 타이핑 (structural typing)
  // - 정의가 되어있는 타입 이름으로 비교하는게 아니고, 구조로 타입을 구분해서 아래의 할당이 가능한 것
  // - 타입스크립트느 타입 이름이나 선언 방식(인터페이스, 타입 별칭, 제네릭)이 아니라 구조로 타입을 구분한다.
  car = vehicle; // 타입이 달라도 할당 가능
  vehicle = car; // 마찬가지로 할당 가능 -> 상호 호환 가능 ! , 이렇게 해도 여전히 타입은 Vehicle이라고 나옴

  let num: number = 10;
  let str: string = "A";
  // 그럼...
  // num = str;
  // str = num; 이거도 됨...? -> 그럴리가....

  function printValue(obj: Car) {
    console.log(`${obj.name}, ${obj.speed}`);
  }
  printValue(car);
  printValue(vehicle); // 이것도 가능해짐 (타입이 달라도 구조가 같으니까 ok)
}
// Vehicle에 speed 제거
{
  type Car = {
    name: string;
    speed: number;
  };

  type Vehicle = {
    name: string;
  };

  let car: Car = {name: "bmw", speed: 100};
  let vehicle: Vehicle = {name: "honda"};

  // car = vehicle  // ❌ 필수 속성인 "speed"가 없어서
  // 부족한건 안되는데 넘치는건 안됨

  // car로 재할당
  vehicle = car; // Vehicle의 필수 조건은 "name". name 속성만 있으면 구조적으로 같다고 판단함
  // 구조를 바꾸는게 아님 ! 내용을 덮어씌우는 것 !

  console.log(vehicle); // { name: 'bmw', speed: 100 }
  // 실제로 값은 들어가 있지만 사용은 불가능함
  // vehicle을 할당은 가능한데, 그렇다고 Car 속성이 되는건 아님,
  // Vehicle 타입은 name 속성 밖에 없기 때문에 speed 속성을 사용할 수는 없는 것
  // console.log(vehicle.speed) // ❌ 여기에 접근할 수는 없음

  function printValue(obj: Vehicle) {
    console.log(`${obj.name}`);
  }
  printValue(car);
  printValue(vehicle); // 둘 다 가능
}
