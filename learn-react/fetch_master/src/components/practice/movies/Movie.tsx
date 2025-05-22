import {useEffect, useState} from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import {movieInstance} from "../../../api/axiosInstance";

export default function Movie() {
  // 데이터 세팅
  const [nowPlaying, setNowPlaying] = useState<MovieType[]>([]);

  const [upcoming, setUpcoming] = useState<MovieType[]>([]);

  // 데이터 출력 확인
  const fetchNowPlaying = async () => {
    const result = await movieInstance.get("/movie/now_playing");
    // console.log(result.data.results);
    setNowPlaying(result.data.results);
  };
  const fetchUpcoming = async () => {
    const result = await movieInstance.get("/movie/now_playing");
    setNowPlaying(result.data.results);
  };

  // useEffect(() => {
  //   movieInstance
  //     .get("/movie/now_playing") //
  //     .then((result) => {
  //       console.log(result);
  //     });
  // }, []);

  useEffect(() => {
    fetchNowPlaying();
    fetchUpcoming();
  }, []);

  return (
    <>
      {/* {JSON.stringify(nowPlaying)} */}
      <MovieHeader />
      <MovieMain />
      <MovieList movies={nowPlaying} />
      <MovieList movies={nowPlaying} />
    </>
  );
}
