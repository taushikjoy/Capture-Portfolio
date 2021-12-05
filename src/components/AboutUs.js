import React from "react";
import home1 from "../img/home1.png";
//import styled from "styled-components";
import { About, Hide, Description, Image } from "../style.js";

function AboutUs() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              {" "}
              your <span>dreams</span> come{" "}
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          inventore aliquid,
        </p>
        <button>contact us</button>
      </Description>

      <Image>
        <img src={home1} alt="gaja r pic" />
      </Image>
    </About>
  );
}

export default AboutUs;
