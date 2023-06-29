type Props = {
  onPrev: () => void;
};

export default function PrevButton({ onPrev }: Props) {
  return (
    <button style={{ backgroundColor: 'white' }} onClick={() => onPrev()}>
      Prev
    </button>
  );
}
