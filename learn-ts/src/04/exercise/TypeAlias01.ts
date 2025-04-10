{
  // 1
  type Person = {
    name: string;
    age: number;
  };
  function getPersonInfo(person: Person): void {
    console.log(`${person.name}, ${person.age}`);
  }
  const person: Person = {
    name: "김ㅇㅇ",
    age: 20,
  };
  getPersonInfo(person);
}
{
  // 2
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };

  function createConfig(host: string, port: number, ssl: boolean): Config {
    return {host, port, ssl};
  }

  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
  // 3
  type Rectangle = {
    width: number;
    height: number;
  };

  function calculateArea(rect: Rectangle): number {
    return rect.width * rect.height;
  }

  const rectangle: Rectangle = {
    width: 5,
    height: 5,
  };
  console.log(calculateArea(rectangle));
}
{
  // 4
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  function calculateAverageGrade(student: Student): number {
    const total = student.grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / student.grades.length;
    return average;
  }

  const student1: Student = {
    name: "서ㅇㅇ",
    age: 18,
    grades: [50, 90, 70, 90],
  };
  console.log(calculateAverageGrade(student1));
}
{
  // 5.
  type Response = {
    status: string;
    data: string;
    message: string;
  };

  function createResponse(status: string, data: string, message: string): Response {
    return {status, data, message};
  }

  console.log(createResponse("success", "John", "fetch success"));
}
{
  // 6
  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  function getEmployeeInfo(employee: Employee): string {
    return `${employee.name} works as a ${employee.position} with ID: ${employee.id}.`;
  }

  console.log(getEmployeeInfo({id: "1", name: "james", position: "developer"}));
}
{
  // 7
  type Circle = {
    radius: number;
  };

  function calculateCircumference(circle: Circle): number {
    return 2 * Math.PI * circle.radius;
  }

  console.log(calculateCircumference({radius: 3}));
}
{
  // 8
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  function getDiscountedPrice(product: Product, discount: number): number {
    return product.price * (1 - discount / 100);
  }

  console.log(getDiscountedPrice({name: "bag", price: 1000, inStock: true}, 10));
}
{
  // 9
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  function getBookSummary(book: Book): string {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}.`;
  }

  console.log(getBookSummary({title: "river", author: "james", publishedYear: 2020}));
}
{
  // 10
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  function isValidTransaction(transaction: Transaction): boolean {
    return transaction.amount > 0;
  }
}
