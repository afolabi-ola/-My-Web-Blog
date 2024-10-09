import styled from 'styled-components';

interface TestimonialSlideProps {
  slideObj: {
    userQuote: string;
    quoteDesc: string;
    userName: string;
    userLocation: string;
    userImg: string;
  };
}

const TestimonialSlide = ({ slideObj }: TestimonialSlideProps): JSX.Element => {
  return (
    <TestimonialSlideWrapper>
      <QuoteCard>
        <h3>
          <strong>{slideObj?.userQuote}</strong>
        </h3>
        <TestimonyDesc>{slideObj?.quoteDesc}</TestimonyDesc>
        <UserProfile>
          <UserProfileImg>
            <img src={slideObj?.userImg} alt={slideObj?.userName} />
          </UserProfileImg>
          <UsernameStyles>
            <h4>{slideObj?.userName}</h4>
            <p>{slideObj?.userLocation}</p>
          </UsernameStyles>
        </UserProfile>
      </QuoteCard>
    </TestimonialSlideWrapper>
  );
};

export default TestimonialSlide;

const TestimonialSlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: transparent;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  position: relative;
`;

const UserProfile = styled.div`
  display: flex;
  padding: 0 2rem;
  margin-top: 2.5rem;
  position: absolute;
  bottom: 3rem;
`;
const UserProfileImg = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const QuoteCard = styled.div`
  width: 65%;
  position: relative;
  margin-top: 3rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 100;
    margin-bottom: 2rem;
  }

  &::before {
    content: '\\201C';
    position: absolute;
    top: -5.7rem;
    left: -5rem;
    line-height: 1;
    font-size: 15rem;
    /* font-family:'Courier New', Courier, monospace; */
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    color: deepskyblue;
  }
`;
const TestimonyDesc = styled.p`
  width: 85%;
  font-size: 1.4rem;
  color: #3b3b3b;
  font-weight: 100;

  /* border: 1px solid red; */
`;

const UsernameStyles = styled.div`
  padding: 0 1.5rem;
  position: relative;

  h4 {
    font-size: 1.2rem;
  }
  p {
    width: 20rem;
    position: absolute;
    bottom: 0;
    font-size: 1.2rem;
  }
`;
