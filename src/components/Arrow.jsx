import styled from "styled-components";

const DIV = styled.div`
  position: absolute;
  top: 54%;
  left: 50%;

  @media (max-width: 768px) {
    top: 45%;
    display: ${(props) => (props.isopen === "true" ? "none" : "block")};
  }
`;

function Arrow({ isopen }) {
  return (
    <DIV isopen={isopen.toString()}>
      <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
        <g
          stroke="#FFF"
          strokeWidth="6"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 3v100M3 95.484l15 15 15-15" />
        </g>
      </svg>
    </DIV>
  );
}

export default Arrow;
