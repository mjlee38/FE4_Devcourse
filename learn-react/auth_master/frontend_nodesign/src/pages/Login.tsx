import { useNavigate } from "react-router";
import { axiosInstance } from "../api/axios";
import { useAuthStore } from "../stores/authStore";

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const loginHandler = async () => {
    const { data } = await axiosInstance.post("/login", {
      username: "test",
      password: "1234",
    });
    login(data.accessToken);
    navigate("/");
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={loginHandler}>로그인</button>
    </>
  );
}
