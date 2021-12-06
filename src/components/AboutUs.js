import React from "react";
import home1 from "../img/home1.png";
//import styled from "styled-components";
import { About, Hide, Description, Image } from "../style.js";
import { motion } from "framer-motion";
import { titleAnime, fade, photoAnime } from "./PageAnimation";
import Wave from "./Wave";

function AboutUs() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnime}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnime}>
              your <span>dreams</span> come{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnime}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          inventore aliquid,
        </motion.p>
        <motion.button variants={fade}>contact us</motion.button>
      </Description>

      <Image>
        <motion.img variants={photoAnime} src={home1} alt="gaja r pic" />
      </Image>

      <Wave />
    </About>
  );
}

export default AboutUs;
