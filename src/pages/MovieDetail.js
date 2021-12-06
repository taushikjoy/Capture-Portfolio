import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

import { MovieState } from "../MovieState";

import { motion } from "framer-motion";
import { pageAnimation } from "../components/PageAnimation";

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
        <Detail
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <Headline>
            <h2>{movie.title} </h2>
            <img src={movie.mainImg} alt="movie" />
          </Headline>

          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
        </Detail>
      )}
    </>
  );
};

const Detail = styled(motion.div)`
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
    /* transition: all 1s ease; */

    /* &:hover {
      transform: scale(1.2);
      overflow-x: hidden;
    } */
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 2rem 7rem;
  align-items: center;
  justify-content: space-between;
`;

const AwardStyle = styled.div`
  padding: 3rem;
  h3 {
    font-size: 1.7rem;
    font-weight: lighter;
  }
  .line {
    width: 70%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
