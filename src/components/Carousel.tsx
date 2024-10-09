import styled from 'styled-components';
import Slide from './Slide';
import { useEffect, useRef, useState } from 'react';
import Dots from './Dots';
import Spinner from './Spinner';

interface CarouselProps {
  myImagesArr: { name: string; src: string; desc: string }[];
  isLoading: boolean;
}

function Carousel({ myImagesArr, isLoading }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === myImagesArr.length - 1 ? 0 : prev + 1,
      );
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? myImagesArr.length - 1 : currentSlide - 1,
    );
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === myImagesArr.length - 1 ? 0 : currentSlide + 1,
    );
  };

  const handleDotClick = (i: number) => {
    setCurrentSlide(i);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [myImagesArr.length]);

  return (
    <CarouselStyles
      onMouseEnter={stopAutoSlide} // Stop sliding on mouse enter
      onMouseLeave={startAutoSlide}
    >
      <SlidesWrapper $curs={currentSlide}>
        {isLoading ? (
          <SpinnerContStyles>
            <Spinner />
          </SpinnerContStyles>
        ) : (
          myImagesArr.map((image, i) => (
            <Slide
              imageObj={image}
              key={i}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          ))
        )}
      </SlidesWrapper>
      <TextBtnDotStyles>
        {!isLoading &&
          myImagesArr.map((slide, i) => (
            <Dots
              slide={slide}
              index={i === currentSlide}
              onDotClick={() => handleDotClick(i)}
              key={i}
            />
          ))}
      </TextBtnDotStyles>
    </CarouselStyles>
  );
}

export default Carousel;

const CarouselStyles = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  overflow: hidden;
`;

const SlidesWrapper = styled.div<{ $curs: number }>`
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ $curs }) => -$curs * 100}%);
  height: 100%;
`;

const TextBtnDotStyles = styled.div`
  width: 100%;
  z-index: 4;
  position: absolute;
  bottom: 2rem;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const SpinnerContStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
