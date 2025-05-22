// props 객체
export default function User({ name, age }: { name: string; age: number }) {
  return (
    <h1>
      User: {name} / {age}
    </h1>
  );
}
