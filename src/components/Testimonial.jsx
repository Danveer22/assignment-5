import styled from "styled-components";

const StyledTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8rem auto;
  max-width: 75vw;
`;

const H3 = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-grey);
  font-family: var(--font-family-fraunces);
  letter-spacing: 0.3rem;
  margin-bottom: 5rem;
`;

const TestimonialText = styled.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestimonialFigure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 2.2rem;
  text-align: center;

  img {
    width: 4.8rem;
    border-radius: 50%;
  }
  blockquote {
    font-size: 1.6rem;
    color: var(--color-grey-dark);
    font-weight: 600;
  }
`;

const Figcaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  p {
    font-size: 1.8rem;
    font-family: var(--font-family-fraunces);
    font-weight: 700;
  }
  span {
    display: inline-block;
    font-size: 1.2rem;
    color: var(--color-grey);
    font-weight: 700;
  }
`;

function Testimonial() {
  return (
    <StyledTestimonial>
      <H3>Client Testimonials</H3>
      <TestimonialText>
        <TestimonialFigure>
          <picture>
            <img src="/images/image-emily.jpg" alt="Personimage" />
          </picture>

          <blockquote>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </blockquote>
          <Figcaption>
            <p>Emily R.</p>
            <span>Marketing Directore</span>
          </Figcaption>
        </TestimonialFigure>
        <TestimonialFigure>
          <picture>
            <img src="/images/image-thomas.jpg" alt="Personimage" />
          </picture>

          <blockquote>
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </blockquote>
          <Figcaption>
            <p>Thomas S.</p>
            <span>Chief Operating officer</span>
          </Figcaption>
        </TestimonialFigure>
        <TestimonialFigure>
          <picture>
            <img src="/images/image-jennie.jpg" alt="Personimage" />
          </picture>

          <blockquote>
            Increadible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </blockquote>
          <Figcaption>
            <p>Jennie F.</p>
            <span>Business Owner</span>
          </Figcaption>
        </TestimonialFigure>
      </TestimonialText>
    </StyledTestimonial>
  );
}

export default Testimonial;
