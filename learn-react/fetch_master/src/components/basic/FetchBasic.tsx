// Fetch를 사용해 데이터 통신 수행
//
import {useEffect, useState} from "react";
// CRUD
// C Create - POST
// R Read - GET
// U Update - PUT/PATCH
// D Delete - DELETE
export default function FetchBasic() {
  // 데이터를 가져오겠다. (읽어오겠다.)
  // 데이터 통신 상태
  const [posts, setPosts] = useState([]);
  // loading 처리 상태
  const [loading, setLoading] = useState(true); // loading 상태가 지속중이다
  // error 처리 상태
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") //
      .then((response) => {
        // console.log(response.json());
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        // console.log(result);
        setPosts(result);
        // setLoading(false);
      })
      .catch((error: Error) => {
        console.log(error.message);
        setError(error.message);
        // setLoading(false); -> 중복되니까 finally로 한 번에
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  // 빈 배열로 두면 컴포넌트가 생성될 때, 한번만 실행됨
  // async 사용 불가능
  // 데이터 통신하려면 promise then 방식으로 접근해야 함
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}

// 네트워크 통신 실패 경우
// 1. 도메인이 유효하지 않을 때
// 2. 도메인은 유효하지만, 옳바른 리소스를 찾을 수 없을 때
