import styled from "styled-components";

const DynamicImageDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 8rem;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: end;

  @media (max-width: 768px) {
    height: 50rem;
  }
`;

const DIV = styled.div`
  text-align: center;

  width: 60%;
  h3 {
    color: ${(props) => props.color};
    margin-bottom: 2rem;
    font-size: 3.2rem;
    font-family: var(--font-family-fraunces);
    font-weight: 700;
  }
  p {
    color: ${(props) => props.color};
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

function ImageDiv({ imageUrl, title, description, color }) {
  return (
    <DynamicImageDiv image={imageUrl}>
      <DIV color={color}>
        <h3>{title}</h3>
        <p>{description}</p>
      </DIV>
    </DynamicImageDiv>
  );
}

export default ImageDiv;
