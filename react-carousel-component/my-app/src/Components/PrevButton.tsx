import { FiChevronLeft } from 'react-icons/fi';

type Props = {
  onPrev: () => void;
};

export default function PrevButton({ onPrev }: Props) {
  return (
    <button className="button-prev" onClick={() => onPrev()}>
      <FiChevronLeft />
    </button>
  );
}
