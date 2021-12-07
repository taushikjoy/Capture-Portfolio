import React from "react";
import styled from "styled-components";
import { About } from "../style";
import Toggle from "./Toggle";

function FaqSection() {
  return (
    <Faq>
      <h2>
        ANY QUESTION <span> FAQ</span>{" "}
      </h2>

      <Toggle title="How do I Start ?">
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            dolores sed, distinctio eaque ratione error possimus magnam optio
            recusandae quod et temporibus corporis adipisci animi placeat, eius,
            esse sapiente voluptas!
          </p>
        </div>
      </Toggle>

      <Toggle title="1234?">
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            dolores sed
          </p>
        </div>
      </Toggle>

      <Toggle title="abcdt ?">
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            dolores sed, distinctio eaque ratione error possimus magnam optio
            recusandae quod et temporibus corporis adipisci animi placeat,
          </p>
        </div>
      </Toggle>
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
