import styled from 'styled-components';

function Spinner() {
  return (
    <SpinnerStyles>
      <div></div>
    </SpinnerStyles>
  );
}

export default Spinner;

const SpinnerStyles = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background: conic-gradient(#0000 10%,grey);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 8px),
      #000 0
    );
    animation: rotate 1.5s infinite linear;
  }
  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;
