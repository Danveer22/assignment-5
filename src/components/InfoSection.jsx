import styled from "styled-components";
import ImageDiv from "./ImageDiv";

const SectionInfo = styled.section`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);

  align-items: center;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);

    img[alt="egg image"] {
      grid-row: 1 / 2;
    }
  }
`;

const SectionDiv = styled.div`
  width: 65%;
  padding: 2rem;
  h3 {
    font-size: 4.2rem;
    margin-bottom: 3rem;
    font-weight: 700;
    line-height: 1.2;
    font-family: var(--font-family-fraunces);
  }
  p {
    margin-bottom: 4rem;
    font-size: 1.8rem;
    color: var(--color-grey-dark);
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ResponsiveImg = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: 768px) {
    content: url(${(props) => props.mobilesrc});
  }
`;

const LearnMoreLink = styled.a`
  display: inline-block;
  text-decoration: none;
  font-family: inherit;
  text-transform: uppercase;
  font-family: var(--font-family-fraunces);
  color: var(--color-black);
  position: relative;
  font-weight: 700;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    width: 110%;
    height: 8px;
    background-color: ${(props) => props.color};
    top: 60%;
    left: -4.5%;
    transform: translate(-50%, -50%);
    z-index: -1;
    border-radius: 1rem;
    transform-origin: center;
    transform: scale(0);
    transition: all 0.3s ease;
  }
  &:hover::after {
    transform: scale(1);
    transform-origin: center;
  }
`;

function InfoSection() {
  return (
    <SectionInfo>
      <SectionDiv>
        <h3>Transform your brand</h3>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <LearnMoreLink href="#" color="hsl(51, 100%, 49%)">
          Learn more
        </LearnMoreLink>
      </SectionDiv>
      <ResponsiveImg
        src="/images/desktop/image-transform.jpg"
        alt="egg image"
        mobilesrc="/images/mobile/image-transform.jpg"
      />
      <ResponsiveImg
        src="/images/desktop/image-stand-out.jpg"
        mobilesrc="images/mobile/image-stand-out.jpg"
      />
      <SectionDiv>
        <h3>Stand out to the right audience</h3>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we'll build and extend
          your brand in digital places.
        </p>
        <LearnMoreLink href="#" color="hsl(7, 99%, 70%)">
          Learn more
        </LearnMoreLink>
      </SectionDiv>
      <ImageDiv
        imageUrl="./images/desktop/image-graphic-design.jpg"
        color="rgb(25, 83, 107)"
        title="Graphic Design"
        description=" Great design make you memorable. We deliver artwork that underscores
          your brand message and captures potential client's attention"
      ></ImageDiv>
      <ImageDiv
        imageUrl="./images/desktop/image-photography.jpg"
        color="rgb(37, 86, 75)"
        title="Photography"
        description="   Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image."
      ></ImageDiv>
    </SectionInfo>
  );
}

export default InfoSection;
