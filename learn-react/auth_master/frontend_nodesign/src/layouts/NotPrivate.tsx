import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../stores/authStore";
import { useEffect, useState } from "react";

// 인증안된 사람만 접근 가능
export default function NotPrivate() {
  const navigate = useNavigate();
  const [show, setIsShow] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
      return;
    }
    setIsShow(true);
  }, []);

  return <>{show && <Outlet />}</>;
}
