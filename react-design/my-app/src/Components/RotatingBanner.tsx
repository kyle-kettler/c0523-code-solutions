import React, { useState } from 'react';
import Banner from './Banner';
import Indicators from './Indicators';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

type Props = {
  items: string[];
};

export default function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function handleNext() {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  }

  function handlePrev() {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
  }

  function handleIndicatorClick(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Banner item={items[currentIndex]} />
      <PrevButton onPrev={handlePrev} />
      <Indicators
        onIndicatorClicked={handleIndicatorClick}
        currentIndex={currentIndex}
        count={items.length}
      />
      <NextButton onNext={handleNext} />
    </div>
  );
}
