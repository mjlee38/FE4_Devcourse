export default function Child({ name }: { name?: string }) {
  return (
    <>
      <h1>{name || "홍길동"}</h1>
    </>
  );
}
