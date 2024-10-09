import styled from 'styled-components';

// interface QualityProps {
// }

const Quality = (): JSX.Element => {
  return (
    <>
      <QualityStyles>
        <QualityCard>
          <div>
            <img src='./images/11.png' alt='missing' />
          </div>
          <h3>
            <strong>Quality support</strong>
          </h3>
          <p>
            <strong>
              Our dedicated team ensures that every issue is resolved with care,
              offering guidance and expertise whenever you need it.
            </strong>
          </p>
        </QualityCard>
        <QualityCard>
          <div>
            <img src='./images/10.png' alt='missing' />
          </div>
          <h3>
            <strong>24/7 support</strong>
          </h3>
          <p>
            <strong>
              No matter the time, our expert team is always on standby to assist
              with any of your needs. We're always here to help.
            </strong>
          </p>
        </QualityCard>
        <QualityCard>
          <div>
            <img src='./images/6.png' alt='missing' />
          </div>
          <h3>
            <strong>Free Chat And Call</strong>
          </h3>
          <p>
            <strong>
              Easily reach out to us through live chat or direct calls,
              completely free of charge. We believe in accessible, hassle-free
              communication.
            </strong>
          </p>
        </QualityCard>
      </QualityStyles>
      <ServicesBox>
        <h1>Our Services?</h1>
        <div>
          <img src='./images/10.png' alt='missing' />
        </div>
      </ServicesBox>
      <QualityStyles>
        <QualityCard>
          <div>
            <img src='./images/11.png' alt='missing' />
          </div>
          <h3>
            <strong>Happy customers</strong>
          </h3>
          <p>
            <strong>
              We believe in building lasting relationships. Our customers leave
              with smiles on their faces, thanks to our commitment to delivering
              quality and satisfaction.
            </strong>
          </p>
        </QualityCard>
        <QualityCard>
          <div>
            <img src='./images/10.png' alt='missing' />
          </div>
          <h3>
            <strong>5 Star Support</strong>
          </h3>
          <p>
            <strong>
              Our support team is renowned for its top-tier service. From
              personalized solutions to quick resolutions, we offer nothing less
              than 5-star support to ensure every issue is handled with care and
              professionalism.
            </strong>
          </p>
        </QualityCard>
        <QualityCard>
          <div>
            <img src='./images/6.png' alt='missing' />
          </div>
          <h3>
            <strong>Premium services</strong>
          </h3>
          <p>
            <strong>
              Experience the best in class with our premium services. From
              product selection to post-purchase assistance, we guarantee a
              seamless experience that reflects the high standards we uphold in
              everything we do.
            </strong>
          </p>
        </QualityCard>
      </QualityStyles>
    </>
  );
};

export default Quality;

const QualityStyles = styled.div`
/* width: 100%; */
  display: grid;
  grid-template-columns: 1fr;
`;

const QualityCard = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  div {
    width: 3rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    color: grey;
  }
  h3 {
color:var(--primary);
  }
`;

const ServicesBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  div {
    width: 9rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  h1 {
    margin-bottom: 2rem;
    color:var(--primary);
  }
`;
