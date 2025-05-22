import {useTransition} from "react";

export default function FetchCRUD() {
  const [isPending, startTransition] = useTransition();

  const getHandler = async () => {
    // try {
    //   const res = await fetch("http://localhost:3001/posts");
    //   if (!res.ok) throw new Error("Network response was not ok");
    //   const data = await res.json();
    //   console.log(data);
    // } catch (e) {
    //   console.log(e);
    // }

    // 권장하는 방법은 아님 (API가 절대 죽지 않는다는 확신이 있을 때 !) -> error 핸들링이 불가능함 -> 위험하기 떄문에 실무에서는 거의 안쓰는 듯?
    const data = await (await fetch("http://localhost:3001/posts")).json();
    console.log(data);
  };

  // 데이터 등록할 때 사용
  const postHandler = async () => {
    startTransition(async () => {
      try {
        const res = await fetch("http://localhost:3001/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: "4",
            title: "anna",
            views: 100,
          }),
        });
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        console.log(data);
      } catch (e) {
        console.log(e);
        console.log(e instanceof Error && e.message);
      }
    });
  };
  // 데이터의 전체를 수정할 때는 PUT, 데이터의 일부를 수정할 때는 PATCH (의미론적으로 그 의미가 부여될 뿐이지 강제적인 건 x)
  const putHandler = async () => {
    try {
      // 아디가 1번인 posts 데이터를 put(수정)하겠다
      const res = await fetch("http://localhost:3001/posts/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "modify data",
          views: 500,
        }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data); // {title: 'modify data', views: 500, id: '1'}
    } catch (e) {
      console.log(e);
      console.log(e instanceof Error && e.message);
    }
  };
  const patchHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts/1", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "patch modify data",
          views: 500,
        }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data); // {title: 'patch modify data', views: 500, id: '1'}
    } catch (e) {
      console.log(e);
      console.log(e instanceof Error && e.message);
    }
  };
  const deleteHandler = async () => {
    try {
      // id가 5번인 데이터를 지우겠다
      const res = await fetch("http://localhost:3001/posts/5", {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data); // {}
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form className='flex gap-4'>
        <button type='button' onClick={getHandler}>
          GET
        </button>
        <button
          type='button'
          className='disabled:text-gray-400'
          onClick={postHandler}
          disabled={isPending}
        >
          POST
        </button>
        <button type='button' onClick={putHandler}>
          PUT
        </button>
        <button type='button' onClick={patchHandler}>
          PATCH
        </button>
        <button type='button' onClick={deleteHandler}>
          DELET
        </button>
      </form>
      {isPending && <h1>잠시만 기다려주세요...</h1>}
    </>
  );
}
