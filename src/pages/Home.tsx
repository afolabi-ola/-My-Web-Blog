import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Section from '../components/Section';
import TopBanner from '../components/TopBanner';
import Quality from '../components/Quality';
import BestFeatures from '../components/BestFeatures';
import Slider from '../components/Slider';
import useMyCarFetch from '../hooks/useMyCarFetch';
import useMyTestimonyFetch from '../hooks/useMyTestimonyFetch';
import Footer from '../components/Footer';
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // import your custom hook
import { NavLink } from 'react-router-dom';

interface imagesType {
  myImages: {
    name: string;
    src: string;
    desc: string;
  }[];
  isLoading: boolean;
}
interface testimonyType {
  myTestimony: {
    userQuote: string;
    quoteDesc: string;
    userName: string;
    userLocation: string;
    userImg: string;
  }[];
  isTestimonyLoading: boolean;
}

const Home = () => {
  const { myImages, isLoading }: imagesType = useMyCarFetch();
  const { myTestimony, isTestimonyLoading }: testimonyType =
    useMyTestimonyFetch();

  const { elementRef: firstSectionRef, isVisible: firstSectionVisible } =
    useIntersectionObserver({
      threshold: 0.5,
    });
  const {
    elementRef: secondSectionObserverRef,
    isVisible: secondSectionVisible,
  } = useIntersectionObserver({
    threshold: 0.5,
  });

  return (
    <HomeStyles>
      <Carousel myImagesArr={myImages} isLoading={isLoading} />
      <Section bgColor='transparent'>
        <FirstSectionStyles
          ref={firstSectionRef}
          $isVisible={firstSectionVisible}
        >
          <h1>Welcome To My Web Blog</h1>
          <p>
            We bring you quality insights and resources across various niches,
            empowering you with knowledge that enriches both your personal and
            professional journey. Explore our curated content designed to
            educate, inspire, and elevate your experience.
          </p>
        </FirstSectionStyles>
      </Section>
      <Section>
        <SecondSectionStyles
          ref={secondSectionObserverRef}
          $isVisible={secondSectionVisible}
        >
          <TopBanner />
        </SecondSectionStyles>
      </Section>
      <Section bgColor='rgb(42, 60, 95)' margin='0 0 3rem 0'>
        <BestFeatures />
      </Section>
      <Section justifyContent='space-evenly'>
        <Quality />
      </Section>
      <Section>
        <Slider myImagesArr={myTestimony} isLoading={isTestimonyLoading} />
      </Section>
      <Section bgColor='#37383d' display='grid'>
        <JoinStyles>
          <h1>
            The best time to start engaging with quality content was yesterday.
            The second best time is now!
          </h1>
          <NavLink to='/booking'>
            <JoinButtonStyles>Click to Book now!</JoinButtonStyles>
          </NavLink>
        </JoinStyles>
      </Section>
      <Footer />
    </HomeStyles>
  );
};

export default Home;

const HomeStyles = styled.div`
  p {
    line-height: 1.5;
  }
`;

const FirstSectionStyles = styled.div<{ $isVisible: boolean }>`
  width: 45%;
  text-align: center;
  color: #000000;
  margin-top: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
  h1 {
    color: var(--primary);
  }
  p {
    color: #3b3b3b;
    font-size: 1.2rem;
  }

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? 'translateY(0)' : 'translateY(50px)'};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const SecondSectionStyles = styled.div<{ $isVisible: boolean }>`
  width: 100%;

  // Animation for second section
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? 'translateY(0)' : 'translateY(50px)'};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const JoinStyles = styled.div`
  padding: 3rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid grey;
  h1 {
    font-size: 3rem;
    width: 60%;
    margin-bottom: 2rem;
    color: var(--secondary);
  }
`;

const JoinButtonStyles = styled.button`
  width: 20rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 2rem;
  outline: none;
  background-color: #0000006a;
  color: antiquewhite;
  font-size: 1rem;

  &:hover {
    background-color: antiquewhite;
    color: var(--primary);
    transition: all 0.5s ease-in-out;
  }
`;
