import { useAuthStore } from "../stores/authStore";

export default function Home() {
  const accessToken = useAuthStore((state) => state.accessToken);
  return (
    <>
      <h1>Home</h1>
      <h2>{accessToken}</h2>
    </>
  );
}
