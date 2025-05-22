import {useEffect} from "react";
import {useParams} from "react-router";

export default function Read() {
  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.a}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [params]);
  return (
    <>
      {/* 
        동적 세그먼트 ( <Route path='/read/:id' element={<Read />} /> ) 에서 id로 설정해서
        params.id 인 것 ! 만약 "/read/:a" 라고 했으면 params.a 해야됨
      */}
      <h1>Read Component: {params.a}</h1>
    </>
  );
}
