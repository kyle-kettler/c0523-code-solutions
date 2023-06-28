import { useState } from 'react';
import Banner from './Banner';
import Indicators from './Indicators';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

type Props = {
  items: string[];
};

export default function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Banner item={items[currentIndex]} />
      <PrevButton />
      <Indicators currentIndex={currentIndex} count={items.length} />
      <NextButton />
    </div>
  );
}
