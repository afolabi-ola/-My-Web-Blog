import styled from 'styled-components';
import FlexCard from '../components/FlexCard';
import Section from '../components/Section';
import Banner from '../components/Banner';
import BookingSteps from '../components/BookingSteps';
import WhatNext from '../components/WhatNext';
import Footer from '../components/Footer';

// interface BookingProps {
//}

const Booking = (): JSX.Element => {
  return (
    <>
      <BookingStyles>
        <Section padding='0'>
          <Banner
            bgColor='var(--primary)'
            color='var(--accent)'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            padding='2rem 0 4rem'
            margin='0 0 3rem 0'
          >
            <BannerText>
              <h1>Join the Insightful Journey</h1>
              <p>
                The best time to start was yesterday, but today is just as
                perfect! Unlock premium content and join a community that
                thrives on knowledge.
              </p>
            </BannerText>
          </Banner>
        </Section>
        <Section>
          <WhyText>
            <h1>Why Subscribe to Our Premium Content?</h1>
          </WhyText>
        </Section>
        <Section flexDirection='column'>
          <FlexCard>
            <FlexText>
              <div>
                <svg>
                  <use xlinkHref='./images/icons-book.svg#icon-trending-up'></use>
                </svg>
              </div>
              <h3>
                Exclusive access to insightful articles and thought-provoking
                pieces.
              </h3>
              <p>
                Our premium content dives deeper into topics that matter most to
                you. With well-researched articles and detailed analysis, your
                knowledge will stay ahead of the curve.
              </p>
            </FlexText>
            <FlexImage>
              <div>
                <img src='./images/images.webp' alt='premium picture' />
              </div>
            </FlexImage>
          </FlexCard>
          <FlexCard flexDirection='row-reverse'>
            <FlexText>
              <div>
                <svg>
                  <use xlinkHref='./images/icons-book.svg#icon-trending-up'></use>
                </svg>
              </div>
              <h3>
                Personalized recommendations based on your reading preferences.
              </h3>
              <p>
                Enjoy tailored content that speaks directly to your interests.
                Our personalized suggestions keep you engaged with topics you
                care about.
              </p>
            </FlexText>
            <FlexImage>
              <div>
                <img src='./images/images-1.webp' alt='premium picture' />
              </div>
            </FlexImage>
          </FlexCard>
          <FlexCard>
            <FlexText>
              <div>
                <svg>
                  <use xlinkHref='./images/icons-book.svg#icon-trending-up'></use>
                </svg>
              </div>
              <h3>
                Be the first to know about exclusive insights and community
                events.
              </h3>
              <p>
                Stay ahead with early access to articles, special offers, and
                updates. Be in the loop with our insider information and invites
                to exclusive community events.
              </p>
            </FlexText>
            <FlexImage>
              <div>
                <img src='./images/images-2.webp' alt='premium picture' />
              </div>
            </FlexImage>
          </FlexCard>
        </Section>
        <Section>
          {' '}
          <BookingSteps />
        </Section>
        <Section>
          <WhatNext />
        </Section>
      </BookingStyles>
      <Footer />
    </>
  );
};

export default Booking;

const BookingStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FlexText = styled.div`
  width: 100%;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  /* border: 1px solid red; */
  p {
    width: 25rem;
    /* margin-right: 3rem; */
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(42, 60, 95);
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    margin-bottom: 1rem;

    svg {
      width: 1rem;
      height: 1rem;
      fill: rgba(255, 255, 255);
    }
  }
`;
const FlexImage = styled.div`
  width: 100%;
  margin-top: 3rem;
  div {
    width: 30rem;
    width: 25rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
const BannerText = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 3rem 0 1rem;
    text-align: center;
    align-items: center;
    font-size: 5rem;
  }
  p {
    padding-bottom: 2rem;
    font-size: 1.5rem;
    width: 50%;
    text-align: center;
  }
`;

const WhyText = styled.div`
  h1 {
    font-size: 3rem;
    color: var(--primary);
  }
`;
