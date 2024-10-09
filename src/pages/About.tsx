import styled from 'styled-components';
import Footer from '../components/Footer';
import Section from '../components/Section';

const About = (): JSX.Element => {
  return (
    <>
      <Section>
        <AboutStyles>
          <h1>About Us</h1>
          <p>
            Welcome to <strong>My Web Blog</strong>, where passion meets
            creativity! We are dedicated to providing high-quality content,
            insights, and resources on a variety of topics. Our platform is
            built with the intent to inspire, educate, and connect with
            like-minded individuals who are passionate about
            [topic/industry/niche].
          </p>
          <p>
            Our journey began with a vision to create a space that is not only
            informative but also interactive, where users can engage with
            content that speaks to them. Whether you are here to learn, explore,
            or be inspired, we are glad to have you on this journey with us!
          </p>
          <p>
            What sets us apart? We believe in authenticity, originality, and the
            power of community. Every article, feature, and story on our blog is
            crafted with the utmost care to ensure it resonates with you, our
            valued audience.
          </p>
          <h2>Our Mission</h2>
          <p>
            To deliver exceptional content that fosters creativity and
            innovation, while building a community of passionate readers and
            contributors.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Creativity</strong>: Always pushing the boundaries to
              explore new ideas and perspectives.
            </li>
            <li>
              <strong>Integrity</strong>: Providing honest, valuable, and
              reliable information to our readers.
            </li>
            <li>
              <strong>Community</strong>: Fostering a space where everyone feels
              welcome to share and grow.
            </li>
          </ul>
          <p>
            Thank you for being a part of our journey. Let’s continue to create,
            inspire, and grow together!
          </p>
        </AboutStyles>
      </Section>
      <Footer />
    </>
  );
};

export default About;

const AboutStyles = styled.div`
  width: 80%;
  margin: 2rem auto;
  font-family: 'Arial', sans-serif;
  line-height: 1.8;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #2a3c5f;
  }

  h2 {
    font-size: 1.8rem;
    margin-top: 2rem;
    color: #293d5a;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1.5rem;

    strong {
      color: #2a3c5f;
    }
  }

  ul {
    margin-top: 1.5rem;
    padding-left: 1.5rem;

    li {
      font-size: 1rem;
      color: #444;
      margin-bottom: 1rem;

      strong {
        color: #2a3c5f;
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p,
    li {
      font-size: 0.9rem;
    }
  }
`;
