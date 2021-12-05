import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <StyledNav>
      <h1>
        <Link to="/">Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/">3. Contract Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  height: 20vh;
  display: flex;
  justify-content: space-between;
  padding: 2rem 7rem;

  h1 {
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    gap: 2rem;
    margin-right: 2rem;
  }
`;

export default Nav;
