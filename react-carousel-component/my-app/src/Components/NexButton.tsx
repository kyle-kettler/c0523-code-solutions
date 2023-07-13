import { FiChevronRight } from 'react-icons/fi';

type Props = {
  onNext: () => void;
};

export default function NextButton({ onNext }: Props) {
  return (
    <button className="button-next" onClick={() => onNext()}>
      <FiChevronRight />
    </button>
  );
}
