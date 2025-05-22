import { NavLink, Outlet } from "react-router";
import { axiosInstance } from "../api/axios";
import { useAuthStore } from "../stores/authStore";

export default function RootLayout() {
  const logout = useAuthStore((state) => state.logout);
  const logoutHandler = async () => {
    const { status } = await axiosInstance.post("/logout");
    if (status === 204) {
      console.log("logout");
      logout();
    }
  };
  return (
    <>
      <header>
        header <button onClick={logoutHandler}>로그아웃</button>
      </header>
      <nav>
        <ul className="flex gap-2 underline text-blue-500">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/user">User</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
