type Props = {
  count: number;
  currentIndex: number;
  onIndicatorClicked: (i: number) => void;
};

export default function Indicators({
  count,
  currentIndex,
  onIndicatorClicked,
}: Props) {
  function renderButtons(count: number) {
    const buttonArr = [];
    for (let i = 0; i < count; i++) {
      buttonArr.push(
        <button
          key={i}
          type="button"
          className={i === currentIndex ? 'indicator active' : 'indicator'}
          onClick={() => onIndicatorClicked(i)}></button>
      );
    }
    return buttonArr;
  }

  return <div className="pagination">{renderButtons(count)}</div>;
}
