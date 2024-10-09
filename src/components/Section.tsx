import React from 'react';
import styled from 'styled-components';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface SectionProps {
  children: React.ReactNode;
  bgColor?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  padding?: string;
}

const Section = ({
  children,
  bgColor = 'transparent',
  display = 'flex',
  flexDirection = 'row',
  justifyContent = 'center',
  alignItems = 'center',
  margin = '0',
  padding = '20px 10px',
}: SectionProps): JSX.Element => {
  // Apply intersection observer to different sections
  const { elementRef: firstSectionRef, isVisible: firstSectionVisible } =
    useIntersectionObserver({
      threshold: 0.25,
    });
  return (
    <SectionStyles
      ref={firstSectionRef}
      $bgColor={bgColor}
      $displayPos={display}
      $flexDirection={flexDirection}
      $justifyContentPos={justifyContent}
      $alignItemsPos={alignItems}
      $marginPos={margin}
      $isVisible={firstSectionVisible}
      $padding={padding}
    >
      {children}
    </SectionStyles>
  );
};

export default Section;

const SectionStyles = styled.section<{
  $bgColor: string;
  $displayPos: string;
  $flexDirection: string;
  $justifyContentPos: string;
  $alignItemsPos: string;
  $marginPos: string;
  $isVisible: boolean;
  $padding: string;
}>`
  width: 100%;
  height: 100%;
  padding: ${({ $padding }) => $padding};
  display: ${({ $displayPos }) => $displayPos};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  justify-content: ${({ $justifyContentPos }) => $justifyContentPos};
  align-items: ${({ $alignItemsPos }) => $alignItemsPos};
  background-color: ${({ $bgColor }) => $bgColor};
  margin: ${({ $marginPos }) => $marginPos};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? 'translateY(0)' : 'translateY(50px)'};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;
