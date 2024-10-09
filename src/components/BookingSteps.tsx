import styled from 'styled-components';

const BookingSteps = (): JSX.Element => {
  return (
    <StyledSection>
      <h2>How to Book</h2>
      <p>Booking with us is quick and easy! Just follow these steps:</p>
      <StyledStepsList>
        <li>
          Click on the <strong>Book Now</strong> button below.
        </li>
        <li>Fill out the form with your details.</li>
        <li>
          Choose your preferred date and time for consultation or event access.
        </li>
        <li>
          Submit your booking and wait for a confirmation email from our team.
        </li>
      </StyledStepsList>
    </StyledSection>
  );
};

export default BookingSteps;



const StyledSection = styled.section`
  width: 80%;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2rem;
    color: #2a3c5f;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #4a4a4a;
    margin-bottom: 1.5rem;
  }
`;

const StyledStepsList = styled.ol`
  margin-left: 2rem;
  padding-left: 1rem;
  list-style-type: decimal;
  font-size: 1.1rem;
  color: #4a4a4a;

  li {
    margin-bottom: 1rem;
    padding-left: 0.5rem;
  }

  strong {
    color: #d43e8a; /* Matches your design theme color */
  }
`;


