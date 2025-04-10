{
  // 💡 이넘(enum) - 열거형 (관련된 타입을 묶어놓는 것)
  // 열거형 타입 지정할 때 enum type 사용
  // interface, 타입 별칭의 재료로 사용될 수 있음

  type Status = string;
  function showStatus(status: Status) {
    if (status === "loading") {
      console.log("로딩 중...");
    } else if (status === "success") {
      console.log("성공");
    } else if (status === "error") {
      console.log("실패");
    }
  }
  showStatus("loading"); // 로딩 중...
  showStatus("sucess"); // 아무것도 안뜸, 오타때문 -> 엄밀히 따지면 버그임. 왜? 실행은 됐지만 원하는 값을 못얻어내서
}

// 이런걸 방지하고자 enum 사용

{
  type Status = string;
  enum StatusEnum {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }
  function showStatus(status: StatusEnum) {
    if (status === "loading") {
      console.log("로딩 중...");
    } else if (status === "success") {
      console.log("성공");
    } else if (status === "error") {
      console.log("실패");
    }
  }
  showStatus(StatusEnum.Success); //
}

// switch 사용

{
  type Status = string;
  enum StatusEnum { // enum의 키 값은 파스칼 케이스로
    Loading = "loading",
    Success = "success",
    Error = "error",
  }
  function showStatus(status: StatusEnum) {
    switch (status) {
      case StatusEnum.Loading:
        console.log("로딩 중...");
        break;
      case StatusEnum.Success:
        console.log("성공!");
        break;
      case StatusEnum.Error:
        console.log("실패!");
        break;
    }
  }
  showStatus(StatusEnum.Success);
}

// eunm을 많이 쓰느냐? -> 케바케. 쓸 일이 있긴한데, 엄청 많이 쓰진 않음
// enum이 컴파일되면, 즉시 실행 함수로 컴파일 됨. (JS. 즉시실행 함수...???)

{
  // enum과 const enum의 차이
  // const enum ... { } 은 컴파일 후 결과물 남지 않음(enum의 형태 남지 않음)
  // enum: 번들 크기가 크지만, 디버깅이 용이함
  // const enum: 번들 크기가 작지만, 디버깅이 불편함 (흔적도 안남아서...)
  const enum Status {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }
  console.log(Status.Loading);
  // 📸 노트에 컴파일된 코드도 캡쳐해서 첨부하기 !
}
{
  // 숫자 열겨형 enum
  // enum은 아무것도 할당하지 않으면 0번부터 순차적으로 들어감
  enum Direction {
    Up, // 0
    Down = 500,
    Left,
    Right,
  }
  console.log("Up"); // 단순하게 이렇게 문자열로 사용하는 것보다는
  console.log(Direction.Up); // 이게 더 의미적으로 명확하게 나타낼 수 있음, 근데 0이 출력됨

  console.log(Direction.Up); // 0
  console.log(Direction.Down); // 500
  console.log(Direction.Left); // 501
  console.log(Direction.Right); // 502
}
{
  // 숫자 열거형
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }
  console.log(StatusCode.OK); // 200
  console.log(StatusCode[200]); // OK -> 값으로 열거형의 키 가져올 수 있음 -> 💡 리버스 매핑

  // 💡 리버스 매핑
  // - 값으로 열거형의 키를 가지고 옴
  // - const enum에서는 사용 불가능함  (📸 이것도 캡쳐화면 첨부해서 노트에 추가하기)
  //   -> 컴파일 과정에서 enum이 js 코드로 바뀌지 않고, enum의 흔적이 남아있지 않아서 역방향으로 추적 불가능
}
{
  // 문자 열거형 : enum에 문자를 할당한 것
  enum Status {
    Loading = "loading",
    Error = "error", // 여기서 만약에 "error"를 할당하지 않으면? 에러생김. 문자 열거형은 할당할거면 모든거에 할당돼야 함, 숫자 열거형은 중간에 비어있으면 +1 처리
    Success = "success",
  }
}
{
  // 혼합 열거형
  // -> 잘 사용하지 않음
  enum Status {
    Loading = "loading",
    Error = 0,
    Success = "success",
  }
  // interface의 재료로 사용 가능
  interface Api {
    data: string;
    status: Status.Error;
  }

  const api: Api = {
    data: "success",
    status: Status.Error,
  };
}
{
  type StatusType = "loading" | "success" | "error";
  function showStatusType(status: StatusType) {}
  showStatusType("success"); // 마찬가지로 "sucess" 등 오타내면 오류 띄워주는데...

  // 이렇게 union type을 써도 되는데 굳이 왜 enum 사용?
  // - 관련된 내용을 모아서 정리하자는 의미?
  // - 그냥 "success"가 더 잘 와닿는다, Staus라는 식별자를 사용하여 의미적으로 가독성이 더 좋아보인다, 어떻게 판단하느냐에 달림
  // - error면, API 호출에서의 error인지, Dom 조작에 의한 error인지 알기 어렵지만, 의미있는 식별자와 함께 쓰면 의미론적으로 더 좋음
  // - 조직이나 개인의 이념에 따라 다름.
  // - 가독성 적으로 좀 더 명확하다는 점은 확실히 있다.
}
