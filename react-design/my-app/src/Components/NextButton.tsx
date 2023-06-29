type Props = {
  onNext: () => void;
};

export default function NextButton({ onNext }: Props) {
  return (
    <button style={{ backgroundColor: 'white' }} onClick={() => onNext()}>
      Next
    </button>
  );
}
