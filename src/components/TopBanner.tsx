import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';

const TopBanner = () => {

    const { secondSectionRef } = useOutletContext<{
      secondSectionRef: React.RefObject<HTMLDivElement>;
    }>();
  
  return (
    <TopBannerStyles ref={secondSectionRef}>
      <BannerTextStyles>
        <div>
          <h1>
            Explore The Best Of <span>Curated Content</span>
          </h1>
          <p>
            We specialize in delivering high-quality articles and insights,
            offering valuable information that caters to diverse interests and
            industries.
          </p>
        </div>
      </BannerTextStyles>
      <BannerImageStyles>
        <img src='/images/myBanner.png' alt='' />
      </BannerImageStyles>
    </TopBannerStyles>
  );
};

export default TopBanner;

const TopBannerStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3rem;
  margin-top: 2em;
  padding: 10px 20px;
  align-items: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const BannerTextStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  div {
    width: 95%;
    h1 {
      font-size: 2.5em;
      width: 9em;
      margin-top: 0.5em;
      color: var(--primary);
      @media screen and (max-width: 768px) {
        font-size: 2em;
        width: 9em;
        margin-top: 0em;
      }
      span {
        color: var(--secondary);
      }
    }
    p {
      width: 90%;
      margin-top: 3em;
      font-weight: 500;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin-top: 1em;
        font-weight: 600;
      }
    }
  }
`;

const BannerImageStyles = styled.div`
  width: 80%;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 10px;
    margin-top: 1em;
  }
  @media screen and (max-width: 320px) {
    .banner-image {
      width: 90%;
      border-radius: 10px;
    }
  }
`;
