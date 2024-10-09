import styled from 'styled-components';

const BestFeatures = (): JSX.Element => {
  return (
    <BestFeaturesWrap>
      <ThirdSectionStyles>
        <h1>What Makes Us Stand Out</h1>
        <ThirdSectionFirstParaStyles>
          <p>
            At <strong>My Web Blog</strong>, we are committed to offering
            features that set us apart. From robust customer support to
            innovative tools, we provide you with everything you need to stay
            inspired and connected.
          </p>
        </ThirdSectionFirstParaStyles>
        <FlexImageStyles>
          <FlexImageCard>
            <div>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <title>Unmatched Customer Support</title>
                  <path d='M12 2a9 9 0 00-9 9v6a3 3 0 003 3h1a2 2 0 100-4h-1v-5a7 7 0 1114 0v5h-1a2 2 0 100 4h1a3 3 0 003-3v-6a9 9 0 00-9-9z' />
                  <path
                    d='M9.5 19a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'
                    fill='#ffffff'
                  />
                </svg>
              </span>
            </div>
            <p>
              <strong>Unmatched Customer Support</strong>
            </p>
          </FlexImageCard>
          <FlexImageCard>
            <div>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <title>Built with Passion</title>
                  <path d='M12 1.5c-5.8 0-10.5 4.7-10.5 10.5S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zm0 18.5c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z' />
                  <path
                    d='M12 8c-1.7 1.3-3 3.3-3 5.3 0 2 1.3 3.7 3 3.7s3-1.7 3-3.7c0-2-1.3-4-3-5.3zm0 7c-0.8 0-1.5-0.7-1.5-1.7s0.7-1.7 1.5-1.7 1.5 0.7 1.5 1.7-0.7 1.7-1.5 1.7z'
                    fill='#ffffff'
                  />
                </svg>
              </span>
            </div>
            <p>
              <b>Built with Passion</b>
            </p>
          </FlexImageCard>
          <FlexImageCard>
            <div>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <title>Advanced Dashboard</title>
                  <path d='M3 3h8v8H3V3zm2 2v4h4V5H5zm10 0h6v6h-6V5zm2 2v2h2V7h-2zM3 13h6v8H3v-8zm2 2v4h2v-4H5zm8 0h8v8h-8v-8zm2 2v4h4v-4h-4z' />
                </svg>
              </span>
            </div>
            <p>
              <strong>Advanced Dashboard</strong>
            </p>
          </FlexImageCard>
          <FlexImageCard>
            <div>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <title>Secure Backup Solutions</title>
                  <path
                    d='M17.9 10.5c-0.4-3-2.8-5.5-5.9-5.5-2.4 0-4.5 1.4-5.5 3.4-2.1 0.3-3.5 2.1-3.5 4.1 0 2.2 1.8 4 4 4h11c1.7 0 3-1.3 3-3 0-1.7-1.3-3-3-3h-0.1z'
                    fill='#4A90E2'
                  />
                  <path d='M12 2c-0.6 0-1.1 0.1-1.6 0.4l-5 2.5c-0.4 0.2-0.7 0.6-0.7 1.1v6c0 3.3 2 6.4 5.1 7.9 0.3 0.1 0.6 0.1 0.9 0 3.1-1.5 5.1-4.6 5.1-7.9v-6c0-0.5-0.3-0.9-0.7-1.1l-5-2.5c-0.5-0.3-1-0.4-1.6-0.4zM12 4.2l4 2v5.6c0 2.7-1.6 5.2-4 6.3-2.4-1.1-4-3.6-4-6.3v-5.6l4-2z' />
                </svg>
              </span>
            </div>
            <p>
              <strong>Secure Backup Solutions</strong>
            </p>
          </FlexImageCard>
        </FlexImageStyles>
      </ThirdSectionStyles>
    </BestFeaturesWrap>
  );
};

export default BestFeatures;

const BestFeaturesWrap = styled.div``;

const ThirdSectionStyles = styled.div`
  width: 100%;
  color: white;
  h1 {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 3rem 0 1.5rem 0;
    color: var(--secondary);
    font-size: 3rem;
  }
`;
const ThirdSectionFirstParaStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  p {
    width: 50%;
    line-height: 1.5;
    font-size: 1.2rem;
  }
`;
const FlexImageStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2.5rem;
`;
const FlexImageCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0.7rem;
  }
  span {
    width: 30%;

    img {
      width: 100%;
      height: 100%;
    }

    svg {
      width: 100%;
      height: 100%;
      fill: var(--secondary);
    }
  }
  p {
    margin-bottom: 2rem;
    width: 10rem;
  }
`;
