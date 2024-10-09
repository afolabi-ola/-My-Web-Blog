import React from 'react';
import styled from 'styled-components';

function BackButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return <BackButtonStyles onClick={onClick}>{children}</BackButtonStyles>;
}

export default BackButton;

const BackButtonStyles = styled.button`
  width: 100px;
  font-weight: 900;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
  color: black;
  padding-bottom: 8px;
  outline: none;
  border: 0;
  &:hover {
    background-color: antiquewhite;
    color: red;
    transition: 0.5s ease-in-out;
  }
`;
