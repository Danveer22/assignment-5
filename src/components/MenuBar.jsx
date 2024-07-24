import styled from "styled-components";

const StyledMenu = styled.div`
  height: 70%;
  width: 55%;
  background-color: white;
  clip-path: polygon(
    0 6%,
    94% 6%,
    100% 0,
    100% 100%,
    100% 100%,
    60% 100%,
    0 100%
  );
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Ul = styled.ul`
  list-style: none;
  align-items: center;
  font-size: 2.4rem;
  width: 100%;
  height: 100%;
  /* background-color: orange; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.8rem;
  align-items: center;
  li {
    a:link,
    a:visited {
      display: inline-block;
      font-weight: 500;
      color: var(--color-grey-dark);
    }
  }
  li:last-child {
    a:link,
    a:visited {
      background-color: var(--color-soft-yellow);
      font-size: 2rem;
      padding: 1rem 3rem;
      border-radius: 3rem;
      font-family: var(--font-family-fraunces);
      color: var(--color-black);
      font-weight: 700;
      text-transform: uppercase;
      &:hover {
        background-color: rgba(250, 212, 0, 0.9);
      }
    }
  }
`;

function MenuBar() {
  return (
    <StyledMenu>
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
    </StyledMenu>
  );
}

export default MenuBar;
