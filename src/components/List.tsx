import React from 'react';
import styled from 'styled-components';

interface ListProps {
  question: string;
  answer: string;
  num: number;
  curOpen: number | null;
  setCurOpen: React.Dispatch<React.SetStateAction<number | null>>;
}

const List = ({
  question,
  answer,
  num,
  curOpen,
  setCurOpen,
}: ListProps): JSX.Element => {
  const isOpen = num === curOpen;

  const handleToggle = () => {
    setCurOpen(isOpen ? null : num);
  };

  return (
    <>
      <SubWrapper $isActive={isOpen} onClick={handleToggle}>
        <h3>{question}</h3>
        <img
          src={isOpen ? './images/icon-minus.svg' : './images/icon-plus.svg'}
          alt={question}
        />
      </SubWrapper>
      {isOpen && <Text $isActive={isOpen}>{answer}</Text>}
    </>
  );
};

export default List;

const SubWrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-right: 2rem;
  h3 {
    font-size: 1rem;
    font-family: bold;

    color: ${({ $isActive }) => ($isActive ? ' #00bfff;' : ' #025975')};
  }

  img {
    cursor: pointer;
  }

  &:hover {
    color: #00bfff;
    cursor: pointer;
  }
`;

const Text = styled.p<{ $isActive: boolean }>`
  width: 85%;
  font-family: regular;
  font-size: 0.9rem;
  /* padding-top: 0.5rem; */
  padding-bottom: 0.5rem;
  color: ${({ $isActive }) => ($isActive ? ' #025975;' : '')};
  font-size: ${({ $isActive }) => ($isActive ? '1rem' : '')};
  font-weight: ${({ $isActive }) => ($isActive ? '300' : '100')};
`;

// const SubHeader = styled.h3`
//   font-size: 1rem;
//   font-weight: bold;
// `;
