// import axios from "axios";
import {startTransition, useEffect, useState} from "react";
import {axiosInstance} from "../../api/axiosInstance";

// axios.get
// axios.post
// axios.put
// axios.patch
// axios.delete
export default function AxiosBasic() {
  // data 저장 위한 state
  const [posts, setPosts] = useState([]);

  // loading
  // const [loading, setLoading] = useState(true);

  // error
  const [error, setError] = useState("");

  // async await 방식
  const fetchPosts = async () => {
    try {
      // const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
      // setPosts(data);

      // axiosInstance 객체 사용 -> axios 사용할거라면 , 이렇게 하는게 더 좋은 방법
      const {data} = await axiosInstance.get("/posts");
      setPosts(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknwn Error");
    } finally {
      // setLoading(false);
    }
  };
  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts") //
    //   // .then((data) => {
    //   //   console.log(data); // 불러오는 객체에 바로 데이터가 들어가 있어서 fetch와는 다르게 then을 두 번 쓸 필요가 없다
    //   // });
    //   .then((result) => {
    //     // console.log(result.data); // data 바로 불러오기
    //     setPosts(result.data);
    //   });
    startTransition(async () => {
      await fetchPosts();
    });
    // fetchPosts();
  }, []);
  // if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
