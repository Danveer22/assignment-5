import styled from "styled-components";

const SectionGallery = styled.section`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 20rem);
  }
`;

function Gallary() {
  return (
    <SectionGallery>
      <figure>
        <img
          src="/images/desktop/image-gallery-milkbottles.jpg"
          alt="milk bottles"
        />
      </figure>
      <figure>
        <img src="/images/desktop/image-gallery-orange.jpg" alt="oranges" />
      </figure>
      <figure>
        <img src="/images/desktop/image-gallery-cone.jpg" alt="icecreem cone" />
      </figure>
      <figure>
        <img
          src="/images/desktop/image-gallery-sugarcubes.jpg"
          alt="sugar cubes"
        />
      </figure>
    </SectionGallery>
  );
}

export default Gallary;
