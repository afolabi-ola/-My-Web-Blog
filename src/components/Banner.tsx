import React from 'react';
import styled from 'styled-components';

interface BannerProps {
  children: React.ReactNode;
  bgColor: string;
  color: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gridTemplateColumns?: string;
  padding?: string;
  margin?: string;
}

const Banner = ({
  children,
  bgColor = 'transparent',
  color = 'aliceblue',
  display = 'flex',
  flexDirection = 'row',
  justifyContent = 'center',
  alignItems = 'center',
  gridTemplateColumns = 'repeat(3,1fr)',
  padding = '1rem',
  margin = '0',
}: BannerProps): JSX.Element => {
  return (
    <BannerStyles
      $bgColor={bgColor}
      $color={color}
      $display={display}
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $gridColumns={gridTemplateColumns}
      $padding={padding}
      $margin={margin}
    >
      {children}
    </BannerStyles>
  );
};

export default Banner;

const BannerStyles = styled.div<{
  $bgColor: string;
  $color: string;
  $display: string;
  $flexDirection: string;
  $justifyContent: string;
  $alignItems: string;
  $gridColumns: string;
  $padding: string;
  $margin: string;
}>`
  width: 100%;
  height: 100%;
  display: ${({ $display }) => $display};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  grid-template-columns: ${({ $gridColumns }) => $gridColumns};
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $color }) => $color};
  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};
`;
