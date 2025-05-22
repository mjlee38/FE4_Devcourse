import {useEffect} from "react";
import CountDisplay from "./stores/components/CoundDisplay";
import CountButtons from "./stores/components/CountButton";
import {useCountStore} from "./stores/countStore";

export default function App() {
  // 5개를 관찰해야되면 5개를 뽑아와서 전부 변수에 담아야한다는 불편함이 있음
  // -> subscribeWithSelector 사용
  // const count = useCountStore((state) => state.count);
  // useEffect(() => {
  //   console.log("change", count);
  // }, [count]);

  useEffect(() => {
    count unsubscribe = useCountStore.subscribe(
      (state) => state.count,
      (newCount) => {
        console.log("new Count: ", newCount);
      }
    );
    return () => {
      unsubscribe()
    }
  },[])
  return (
    <>
      <CountDisplay />
      <CountButtons />
    </>
  );
}
