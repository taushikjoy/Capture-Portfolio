import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

import { MovieState } from "../MovieState";

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;
  console.log(url);
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Detail>
          <Headline>
            <h2>{movie.title} </h2>
            <img src={movie.mainImg} alt="movie" />
          </Headline>
        </Detail>
      )}
    </>
  );
};

const Detail = styled.div`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  overflow: hidden;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
    /* overflow: hidden; */
    transition: all 1s ease;

    &:hover {
      transform: scale(1.2);
      overflow-x: hidden;
    }
  }
`;

export default MovieDetail;
