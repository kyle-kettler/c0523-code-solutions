type Props = {
  count: number;
  currentIndex: number;
  onIndicatorClicked: Function;
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
          style={{
            backgroundColor: i === currentIndex ? 'lightblue' : 'white',
          }}
          onClick={() => onIndicatorClicked(i)}>
          {i}
        </button>
      );
    }
    return buttonArr;
  }

  return <div>{renderButtons(count)}</div>;
}
