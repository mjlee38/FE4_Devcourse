{
  // 함수 선언 (함수에 타입 지정)
  const greet = (name: string): string => `Hello, ${name}`;
}
{
  // 변수에 타입 지정
  const greet: (name: string) => string = (name) => `Hello, ${name}`;
}
{
  // 타입 별칭 지정
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `Hello, ${name}`; // 함수 정의 부분이 깔끔해짐 !!
}
{
  let point1: number[] = [10, 20]; // x좌표, y좌표
  // number[] : 얘는 x좌표, y좌표가 아니라 그냥 배열의 요소가 숫자이기만 하면 무한정으로 확장이 될것만 같은 느낌임
  // -> 이럴 때 보통 tuple을 많이 사용함 ! -> 고정된 자리라는 걸 인지시킬 수 있으니까

  // tuple 사용
  let point2: [number, number] = [10, 20]; // x좌표, y좌표
  point2.push(30); // 물론 이렇게 하면 배열이 늘어날 수는 있음
  // 왜? TS가 문법적 허용에 의해서 tuple에 정의되어 있는 타입이 추가되는거라면 허용해주기 떄문 -> 아예 설계 자체가 이렇게 돼있음

  // number[] 보다는 [number,number] 라고 정의하는게 두 자릿수 임을 더 잘 보여주기는 함
  // 하지만 타입 별칭 사용하면 더 잘, 더 명확하게 나타낼 수 있음 !!

  type Point = [number, number];
  let point3: Point = [10, 20]; // 가독성이 더 좋아짐
}
{
  type BookItem = {id: number; name: string; price: number; realeseDate?: Date}; // realeseDate? -> 이런 식으로 나중에 쉽게 확장도 가능함 !
  type OrderBook = {
    orderId: string;
    items: BookItem[];
  };
  let myOrder: OrderBook = {
    orderId: "ord-123",
    items: [
      {
        id: 1,
        name: "코딩 자율학습 HTML+CSS+JS",
        price: 28000,
      },
      {
        id: 2,
        name: "아는 만큼 보이는 FE 개발",
        price: 26000,
      },
    ],
  };
}
