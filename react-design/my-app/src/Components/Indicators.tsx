type Props = {
  count: number;
  currentIndex: number;
};

export default function Indicators({ count, currentIndex }: Props) {
  function renderButtons(count: number) {
    const buttonArr = [];

    for (let i = 0; i < count; i++) {
      if (i === currentIndex) {
        buttonArr.push(
          <button style={{ backgroundColor: 'lightblue' }}>{i}</button>
        );
      } else {
        buttonArr.push(<button>{i}</button>);
      }
    }
    return buttonArr;
  }

  return <div>{renderButtons(count)}</div>;
}
