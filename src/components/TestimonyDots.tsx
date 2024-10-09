import styled from 'styled-components';

function TestimonyDots({
  index,
  onDotClick,
}: {
  slide: string;
  index: boolean;
  onDotClick: () => void;
}) {
  return (
    <DotsStyles
      $active={index}
      onClick={() => onDotClick()}
    ></DotsStyles>
  );
}

export default TestimonyDots;

const DotsStyles = styled.div<{ $active: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 1rem;
  background-position: center center;
  background-size: cover;
  border-radius: 50%;
  background-color: ${({ $active }) =>
    $active === true ? '#888' : '#b9b9b9'};
`;
