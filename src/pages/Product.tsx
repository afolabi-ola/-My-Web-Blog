import styled from 'styled-components';
import Section from '../components/Section';
import Footer from '../components/Footer';

// interface ProductProps {
// }

const Product = (): JSX.Element => {
  return (
    <>
      <ProductStyles>
        <Section>
          <img
            src='./images/img-1.jpg'
            alt='person with dog overlooking mountain with sunset'
          />
          <div>
            <h2>
              About
              <br /> My Web Blog.
            </h2>
            <p>
              Welcome to a space where quality meets curiosity! Our blog offers
              a wide range of carefully crafted articles designed to inform,
              inspire, and engage. Whether you're here for thought-provoking
              reads or practical tips, we've got something for everyone.
            </p>
            <p>
              We believe in the power of well-researched, insightful content.
              From tech trends to lifestyle advice, every post is written with a
              focus on delivering value. Stay tuned for fresh perspectives,
              exciting topics, and ideas that can make a difference.
            </p>
          </div>
        </Section>
      </ProductStyles>
      <Footer />
    </>
  );
};

export default Product;

const ProductStyles = styled.div`
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
