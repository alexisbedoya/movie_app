import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import {useQuery} from "../hooks/useQuery";



export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setLoading(true);
    const searchUrl = search ? "/search/movie?query="+ search : "/discover/movie" ;
    get(searchUrl).then((data) => {
      setLoading(false);
      setMovies(data.results);
    });
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
