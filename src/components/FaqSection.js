import React from "react";
import styled from "styled-components";
import { About } from "../style";

function FaqSection() {
  return (
    <Faq>
      <h2>
        ANY QUESTION <span> FAQ</span>{" "}
      </h2>

      <div className="question">
        <h4>How do I Start ?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            dolores sed, distinctio eaque ratione error possimus magnam optio
            recusandae quod et temporibus corporis adipisci animi placeat, eius,
            esse sapiente voluptas!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>How do I Start ?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            dolores sed
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>How do I Start ?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            dolores sed, distinctio eaque ratione error possimus magnam optio
            recusandae quod et temporibus corporis adipisci animi placeat,
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>How do I Start ?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            dolores sed,
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;

  span {
    display: block;
    padding-bottom: 1rem;
  }

  h4 {
    padding-bottom: 1.5rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 1.5rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
  }
`;

export default FaqSection;
