import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../stores/authStore";
import { useEffect, useState } from "react";

// 인증된 사람만
export default function Private() {
  const navigate = useNavigate();
  const [show, setIsShow] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    setIsShow(true);
  }, []);

  return <>{show && <Outlet />}</>;
}
