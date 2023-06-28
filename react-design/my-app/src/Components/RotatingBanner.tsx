import Banner from './Banner';
import Indicators from './Indicators';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

type Props = {
  items: string[];
};

export default function RotatingBanner({ items }: Props) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Banner />
      <PrevButton />
      <div>
        <Indicators items={items} />
      </div>
      <NextButton />
    </div>
  );
}
