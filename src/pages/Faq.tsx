import styled from 'styled-components';
import Accordion from '../components/Accordion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// interface FAQProps {
// }

const Faq = (): JSX.Element => {
  const { elementRef: firstSectionRef, isVisible: firstSectionVisible } =
    useIntersectionObserver({
      threshold: 0.15, // when 50% of the element is visible
    });
  return (
    <FAQStyles>
      <FaqTextHead>Frequently Asked Questions</FaqTextHead>
      <FaqTextPara>
        Have a few questions take a peek at our Faqs below 😊
      </FaqTextPara>
      <FAQStylesCont>
        <FAQSubContStyles
          ref={firstSectionRef}
          $isVisible={firstSectionVisible}
        >
          <FAQHeaderStyles>
            <img src='./images/icon-star.svg' alt='' />
            <h1>FAQs</h1>
          </FAQHeaderStyles>
          <Accordion />
        </FAQSubContStyles>
      </FAQStylesCont>
    </FAQStyles>
  );
};

export default Faq;
const FaqTextHead = styled.h1`
  width: 30rem;
  margin-left: 2rem;
  color: aliceblue;
  border-top: 1px solid deepskyblue;
  border-bottom: 1px solid deepskyblue;
  padding-left: 2rem;
`;
const FaqTextPara = styled.p`
  width: 37rem;
  margin-left: 2rem;
  margin-top: 2rem;
  font-size: 1.5rem;
  color: aliceblue;
  padding-left: 2rem;
`;

const FAQStyles = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url('./images/background-pattern-desktop.svg');
`;
const FAQStylesCont = styled.div`
  display: flex;
  justify-content: center;
  place-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
`;
const FAQSubContStyles = styled.div<{ $isVisible: boolean }>`
  width: 32rem;
  height: 32rem;
  padding: 1.5rem;
  background-color: gainsboro;
  border-radius: 15px;

  box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.2),
    10px 10px 20px rgba(0, 0, 0, 0.2);

  h1 {
    font-family: variable;
  }
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? 'translateY(0)' : 'translateY(200px)'};
  transition: opacity .5s ease-out, transform 1s ease-out;
`;
const FAQHeaderStyles = styled.div`
  display: flex;
  gap: 1rem;
  h1 {
    color: rgb(42, 60, 95);
  }
`;
