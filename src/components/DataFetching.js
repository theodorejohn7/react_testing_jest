import { useReducer } from "react";

import classes from "./Movie.module.css";

import Movie from "./Movie";

import * as React from "react";
 
import LinearProgress from "@mui/material/LinearProgress";
 
import Box from "@mui/material/Box";
 

const initialState = {
  begin: true,
  movies: [],
  isLoading: false,
  error: null,
  final: null,
};
const reducer = (_state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        begin: false,

        isLoading: false,
        movies: action.payload,
        error: null,
        final: null,
      };
    case "FETCH_ERROR":
      return {
        begin: false,

        isLoading: false,
        error: "Something went wrong",
        movies: [],
        final: null,
      };
    case "FETCH_LOADING":
      return {
        begin: false,

        isLoading: true,
        error: null,
        movies: [],
        final: null,
      };
    case "FETCH_DONE":
      return {
        begin: false,

        isLoading: true,
        error: null,
        movies: [],
        final: true,
      };
  }
};

function DataFetching() {
   

  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchMoviesHandler() {
    let response;

    try {
      dispatch({ type: "FETCH_LOADING" });

      response = await fetch("https://swapi.dev/api/films/");
    } catch (error) {
      response = error;
    } finally {
      dispatch({ type: "FETCH_DONE" });
      if (!response.ok) {
        dispatch({ type: "FETCH_ERROR" });
      }
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data.results });
      }
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section className={classes.parent}>
        {state.begin && <h2>Welcome</h2>}

        {state.isLoading && (
         <Box sx={{ width: '100%' }}>
         <LinearProgress />
       </Box>
        )}
        {state.error && <h2>{state.error}</h2>}
        <div>
          {state.movies.map((movie) => (
            <Movie
              key={movie.episode_id}
              title={movie.title}
              releaseDate={movie.release_date}
              openingText={movie.opening_crawl}
            />
          ))}
        </div>
      </section>
      
    </React.Fragment>
  );
}

export default DataFetching;
