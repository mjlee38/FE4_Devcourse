export default function App() {
  // JSX
  // Javascript + XML - 확장 문법
  // 0. JSX는 HTML과 굉장히 유사하다.

  // 1. 하나의 루트 요소만 반환해야 합니다.
  // 2. 모든 태그는 닫아줘야함
  // 3. 태그의 속성은 카멜 케이스로 사용해야 한다.
  // 4. 표현식은 중괄호 안에서 사용할 수 있다.
  // 5. 인라인 스타일은 객체로.
  // 6. 주석
  const uname = "kisu";
  return (
    <main>
      {/* Hello */}
      <div style={{ color: "red", textDecoration: "underline" }}>
        Hello, World! {uname}
      </div>
      <div>Hello, World! {10 + 20}</div>
      <input type="text" maxLength={3} />
      <br />
    </main>
  );
}
