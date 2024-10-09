import styled from 'styled-components';
import Section from '../components/Section';
import Footer from '../components/Footer';

// interface PricingProps {
// }

const Pricing = (): JSX.Element => {
  return (
    <>
      <PricingStyles>
        <Section>
          <div>
            <h2>
              Simple pricing.
              <br />
              Just $9/month.
            </h2>
            <p>
              Unlock exclusive content and premium features with our simple
              pricing plan. For just $9/month, gain access to well-researched
              articles, deep insights, and more. Join our community and stay
              informed with the latest trends and quality insights tailored just
              for you.
            </p>
          </div>
          <img
            src='./images/img-2.jpg'
            alt='overview of a large city with skyscrapers'
          />
        </Section>
      </PricingStyles>
      <Footer />
    </>
  );
};

export default Pricing;

const PricingStyles = styled.div`
  margin: 1rem 2.5rem 2.5rem 2.5rem;
  padding: 2.5rem 5rem;
  background-color: #2d3439;
  min-height: calc(100vh - 5rem);
  color: aliceblue;
  section {
    margin: 6rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7rem;
    align-items: center;
    img {
      width: 97%;
    }
    h2 {
      font-size: 4rem;
      line-height: 1.2;
      margin-bottom: 3rem;
      line-height: 1.5;
    }
    p {
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }
  }
  section a {
    margin-top: 2rem;
  }
`;
