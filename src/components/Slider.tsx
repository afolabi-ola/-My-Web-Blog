import styled from 'styled-components';
import TestimonialSlide from './TestimonialSlide';
import Spinner from './Spinner';
import TestimonyDots from './TestimonyDots';
import { useEffect, useRef, useState } from 'react';

interface SliderProps {
  myImagesArr: {
    userQuote: string;
    quoteDesc: string;
    userName: string;
    userLocation: string;
    userImg: string;
  }[];
  isLoading: boolean;
}

function Slider({ myImagesArr, isLoading }: SliderProps) {
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

  // useEffect(
  //   function () {
  //     const mySlidesInterval = setInterval(() => {
  //       setCurrentSlide((currentSlide) =>
  //         currentSlide === myImagesArr.length - 1 ? 0 : currentSlide + 1,
  //       );
  //     }, 3000);
  //     return () => clearInterval(mySlidesInterval);
  //   },
  //   [myImagesArr.length],
  // );
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [myImagesArr.length]);

  return (
    <SliderStyles
      $curs={currentSlide}
      $totalSlides={myImagesArr.length}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <TestimonialSlide slideObj={myImagesArr[currentSlide]} />
      )}
      <TextBtnDotStyles>
        {myImagesArr.map((slide, i) => (
          <TestimonyDots
            slide={slide.userImg}
            index={i === currentSlide}
            onDotClick={() => handleDotClick(i)}
            key={i}
          />
        ))}
      </TextBtnDotStyles>
      <SliderButtonLeft onClick={handlePrev}>&larr;</SliderButtonLeft>
      <SliderButtonRight onClick={handleNext}>&rarr;</SliderButtonRight>
    </SliderStyles>
  );
}

export default Slider;

const SliderStyles = styled.div<{ $curs: number; $totalSlides: number }>`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  flex-wrap: 0;
  position: relative;
`;
const TextBtnDotStyles = styled.div`
  width: 100%;
  /* z-index: 4; */
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const SliderButtonLeft = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-weight: 900;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000006a;
  color: antiquewhite;
  padding-bottom: 8px;
  outline: none;
  border: none;
  position: absolute;
  left: 5rem;
  top: 50%;
  user-select: none;
  &:hover {
    background-color: antiquewhite;
    color: deepskyblue;
    transition: 0.5s ease-in-out;
  }
`;
const SliderButtonRight = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-weight: 900;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000006a;
  color: antiquewhite;
  padding-bottom: 8px;
  outline: none;
  border: none;
  position: absolute;
  right: 5rem;
  top: 50%;
  user-select: none;
  &:hover {
    background-color: antiquewhite;
    color: deepskyblue;
    transition: 0.5s ease-in-out;
  }
`;
