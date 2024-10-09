import styled from 'styled-components';

const WhatNext = (): JSX.Element => {
  return (
    <StyledSection>
      <h2>What Happens Next?</h2>
      <p>
        Once your booking is confirmed, you’ll receive an email with all the
        necessary details, including access instructions, event details, or
        consultation information.
      </p>
      <StyledButton>Click to Book Now!</StyledButton>
    </StyledSection>
  );
};

export default WhatNext;

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

const StyledButton = styled.button`
  background-color: var(--primary); /* Main theme color */
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(23, 34, 56); /* Slightly darker on hover */
  }
`;
