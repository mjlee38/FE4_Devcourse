{
  // 인터페이스
  interface Car {
    name: string;
    options:
      | {
          color: string;
        }
      | {
          wheels: number;
        };
  }

  const car1: Car = {
    name: "bmw",
    options: {
      color: "red",
    },
  };

  const car2: Car = {
    name: "g90",
    options: {
      wheels: 4,
    },
  };
}
{
  // 인터페이스
  interface Car<T> {
    name: string;
    options: T;
  }

  const car1: Car<{ color: string }> = {
    name: "bmw",
    options: {
      color: "red",
    },
  };

  const car2: Car<{ wheels: number }> = {
    name: "g90",
    options: {
      wheels: 4,
    },
  };
}
{
  type Pair<T, U> = {
    first: T;
    second: U;
  };

  const numberStringPair: Pair<string, number> = {
    first: "a",
    second: 1,
  };
}
{
  type ID = string | number;
  type Pair<T extends ID, U extends number> = T | U;
  const numberAndString: Pair<string, number> = 10;
}
{
  interface Length {
    length: number;
  }

  function getLength<T extends Length>(value: T[]): number {
    return value.length;
  }
}
