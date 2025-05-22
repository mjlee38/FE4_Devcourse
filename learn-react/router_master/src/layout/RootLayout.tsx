import {Link, NavLink, Outlet, useNavigate} from "react-router";

// 프로그래밍 방식
// 링크 방식 : Link, NavLink

export default function RootLayout() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <header>header</header>
      <nav>
        <ul>
          {/* 
              [ a 태그 역할을 하는 것들 ]
              - Link
              - NavLink
              - a 안쓰는 이유?
                -> a 태그 쓰면 페이지 새로고침 됨 -> 모든 컴포넌트가 리렌더링됨

              [ Nav vs Link ]
              - Nav 
              - 이 링크가 활성 상태인지 내부적으로 검사함, 활성 상태를 체크할 수 있는 기능을 제공함
              - 활성 상태를 체크할 수 있는 isActive 값을 제공함
              - 활성 상태를 검사할 수 있는 콜백함수를 제공함 (style, className 등등...)
              - Link : Link는 제공 안함
          */}
          <li>
            <Link to='/'>/</Link>
          </li>
          <li>
            <Link to='/about'>/about</Link>
          </li>
          <li>
            <NavLink to='/read/1' style={({isActive}) => ({color: isActive ? "red" : "black"})}>
              /read/1
            </NavLink>
          </li>
          <li>
            <button onClick={goHome}>이동하기</button>
          </li>
        </ul>
      </nav>

      {/* 중첩된 요소는 outlet에 들어감 */}
      <Outlet />
      <footer>footer</footer>
    </>
  );
}
