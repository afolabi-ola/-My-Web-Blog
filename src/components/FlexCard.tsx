import React from 'react';
import styled from 'styled-components';

interface FlexCardProps {
  children: React.ReactNode;
  display?: string;
  flexDirection?: string;
  gridTemplateColumns?: string;
}

/**
 *
 */
const FlexCard = ({
  children,
  display = 'flex',
  flexDirection = 'row',
  gridTemplateColumns = 'repeat(1,1fr)',
}: FlexCardProps): JSX.Element => {
  return (
    <FlexCardStyles
      $display={display}
      $flexDirection={flexDirection}
      $gridColumns={gridTemplateColumns}
    >
      {children}
    </FlexCardStyles>
  );
};

export default FlexCard;

const FlexCardStyles = styled.div<{
  $display: string;
  $flexDirection: string;
  $gridColumns: string;
}>`
  display: ${({ $display }) => $display};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  grid-template-columns: ${({ $gridColumns }) => $gridColumns};
  width: 60%;
  margin-bottom: 3rem;
  gap: 3rem;
  position: relative;
  /* border: 1px solid red; */
`;
