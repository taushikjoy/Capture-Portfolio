import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import goodtimes from "../img/goodtimes-small.png";
import theracer from "../img/theracer-small.png";
import { motion } from "framer-motion";
import {
  pageAnimation,
  slider,
  fade,
  lineAnime,
  photoAnime,
} from "../components/PageAnimation";

function OurWork() {
  return (
    <>
      <Work
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        style={{ backgroundColor: "white" }}
      >
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        <Movie>
          <motion.h2 variants={fade}>THE ATHLETE</motion.h2>
          <motion.div variants={lineAnime} className="line"></motion.div>
          <Link to="/work/the-athlete">
            <ImageWrap>
              <motion.img variants={photoAnime} src={athlete} alt="athlete" />
            </ImageWrap>
          </Link>
        </Movie>
        <Movie>
          <h2>Good Times</h2>
          <div className="line"></div>
          <Link to="/work/good-times">
            <img src={goodtimes} alt="goodtimes" />
          </Link>
        </Movie>
        <Movie>
          <h2>THE Racer</h2>
          <div className="line"></div>
          <Link to="/work/the-racer">
            <img src={theracer} alt="theracer" />
          </Link>
        </Movie>
      </Work>
    </>
  );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 7rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const ImageWrap = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
