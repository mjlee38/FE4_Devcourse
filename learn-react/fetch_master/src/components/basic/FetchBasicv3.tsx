import {useEffect, useState, useTransition} from "react";

export default function FetchBasicv3() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setPosts(data);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "unknown Error");
    }
  };

  useEffect(() => {
    startTransition(async () => {
      await fetchPosts();
    });
  }, []);

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
