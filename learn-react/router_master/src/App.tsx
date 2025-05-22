import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Summary from "./pages/Summary";
import Settings from "./pages/Settings";
import RootLayout from "./layout/RootLayout";
import Read from "./pages/Read";
import NotFound from "./pages/NotFound";

/*
  [중첩 라우트]
    - route 안에 또 다른 route 있음
    - 도메인이 붙는다
  [layout route]  
    - 도메인 붙는 것 없이 중첩해서 보여준다
*/
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 중첩 라우트 */}
          {/* 라우트 프리픽스 : 주소에 path값만 붙여주는 것, 중첩된 라우트에서만 사용 가능 */}
          <Route path='my'>
            <Route path='dashboard' element={<Dashboard />}>
              <Route index element={<Summary />}></Route>
              <Route path='settings' element={<Settings />}></Route>
            </Route>
          </Route>
          <Route path='/read' element={<Read />} />
          {/* 동적 세그먼트 -> 상세 페이지 등 들어갈 때 사용 */}
          <Route path='/read/:id' element={<Read />} />
          {/* 
            이걸 미리 예상하고 다 만드는 건 불가능함 -> 이럴 때 사용
            <Route path='/read/1' element={<Read />} />
            <Route path='/read/2' element={<Read />} />
            <Route path='/read/3' element={<Read />} />
            <Route path='/read/4' element={<Read />} /> 
          */}
          {/* 
            옵셔널 세그먼트
            <Route path='/read?/:id' element={<Read />} />
             - /read/1
             - /1
             - http://localhost:5174/superman
             - 다 가능 -> 근데 잘 안씀
          */}
        </Route>
        <Route path='*' element={<NotFound />} />
        {/* 이게 만약 바로 위의 Route 안에 들어가면 Not Found에도 header, footer 들어감 */}

        {/* 스플렛 기법 (*) */}
      </Routes>
    </>
  );
}
