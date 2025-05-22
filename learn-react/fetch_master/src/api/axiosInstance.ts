import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const axiosLocalInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    // 웹에서 나를 증명할 수 있는 토큰
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTNiMTI4OWViM2VlNDUwMjllOGMwNTg1MWQ5NDNjNyIsIm5iZiI6MTc0NTQ2MzAzOC40Niwic3ViIjoiNjgwOWE2ZmVlOTJmOTQwY2E2OWNmMTQ0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.bXSSuj6mLux9HYKDaXrunrJm3MYAGEvBhaXBGO-sln0",
  },
});
