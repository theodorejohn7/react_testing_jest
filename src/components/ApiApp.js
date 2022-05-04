import React, { useState } from "react";

import MoviesList from "./MovieList";
import "./ApiApp.css";

function ApiApp() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [final, setFinal] = useState(null);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something went unplanned!!!");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (errors) {
      setError(errors.message);
    } finally {
      setFinal("Finally we are here");
      setIsLoading(false);

    }
    
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...*.*.*</p>}
        {!isLoading && movies.length === 0 && <p>Found no Movies</p>}
        {!isLoading && error && <p>{error}</p>}
        { <p>{final}</p>}

      </section>
    </React.Fragment>
  );
}

export default ApiApp;
