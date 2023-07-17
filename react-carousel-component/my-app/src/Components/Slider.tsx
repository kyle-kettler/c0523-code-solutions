import React, { useState, useEffect } from 'react';
import Image from './Image';
import Indicators from './Indicators';
import NextButton from './NexButton';
import PrevButton from './PrevButton';
import './Slider.css';

type Props = {
  images: string[];
};

export default function Slider({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [currentIndex, images.length]);

  function handleNext() {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  }

  function handlePrev() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  }

  function handleIndicatorClick(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div className="container">
      <PrevButton onPrev={handlePrev} />
      <div className="slider-wrap">
        <Image item={images[currentIndex]} />
        <Indicators
          onIndicatorClicked={handleIndicatorClick}
          currentIndex={currentIndex}
          count={images.length}
        />
      </div>
      <NextButton onNext={handleNext} />
    </div>
  );
}
