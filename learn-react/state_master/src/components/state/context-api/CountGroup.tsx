import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";

export default function CountGroup() {
  console.log("Count Group");
  return (
    <>
      <CountDisplay />
      <CountButton />
    </>
  );
}
