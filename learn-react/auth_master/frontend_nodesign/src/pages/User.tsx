import { useEffect } from "react";
import { axiosInstance } from "../api/axios";

export default function User() {
  const getUser = async () => {
    const { data } = await axiosInstance.get("/user");
    console.log(data);
  };

  useEffect(() => {
    getUser();
  }, []);
  return <div>User</div>;
}
