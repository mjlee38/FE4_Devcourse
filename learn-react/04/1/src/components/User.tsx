export default function User({ name, age }: { name: string; age: number }) {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
    alert("click");
  };
  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <button onClick={clickHandler}>클릭</button>
      <button onClick={(e) => clickHandler(e)}>클릭</button>
    </>
  );
}
