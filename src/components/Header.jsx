import styled from "styled-components";
import Arrow from "./Arrow";
import { useState } from "react";
import MenuBar from "./MenuBar";
import css from "styled-components";

const StyledHeader = styled.header`
  height: 100vh;
  background-image: url("/images/desktop/image-header.jpg");
  background-size: cover;
  color: var(--color-white);
  position: relative;
  @media (max-width: 768px) {
    background-position: center;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.8rem;

  h2 {
    font-size: 3.2rem;
  }

  a:link,
  a:visited {
    color: var(--color-white);
    text-decoration: none;
  }
`;

const Menu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;
  gap: 4rem;

  @media (max-width: 768px) {
    display: none;
  }

  li:last-child a {
    background-color: var(--color-white);
    color: var(--color-black);
    font-weight: 600;
    font-family: var(--font-family-fraunces);
    font-size: 1.4rem;
    text-transform: uppercase;
    padding: 1.6rem 2rem;
    border-radius: 3rem;

    &:hover {
      background-color: rgba(255, 255, 255, 0.24);
      color: var(--color-white);
    }
  }
`;

const H2 = styled.h2`
  font-size: 4.4rem;
  text-transform: uppercase;
  text-align: center;
  margin-top: 4rem;
  letter-spacing: 0.8rem;
  font-family: var(--font-family-fraunces);

  @media (max-width: 768px) {
    font-size: 4rem;
    margin-top: 2rem;
    display: ${(props) => (props.isopen === "true" ? "none" : "block")};
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <StyledHeader>
      <StyledNav>
        <h2>
          <a href="#">sunnyside</a>
        </h2>
        <Ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </Ul>
        <Menu onClick={handleMenu}>
          <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        </Menu>
        {isOpen && <MenuBar />}
      </StyledNav>
      <H2 isopen={isOpen.toString()}>We are Creatives</H2>
      <Arrow isopen={isOpen} />
    </StyledHeader>
  );
}

export default Header;
