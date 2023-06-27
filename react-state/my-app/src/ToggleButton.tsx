import { useState } from 'react';

type Props = {
  text: string;
  color: string;
};

export default function ToggleButton({ text, color }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useState', isClicked);

  function handleClick() {
    console.log('before setter', isClicked);
    setIsClicked(isClicked ? false : true);
    console.log('after setter', isClicked);
  }

  return (
    <button
      onClick={handleClick}
      style={
        isClicked ? { backgroundColor: 'white' } : { backgroundColor: color }
      }>
      {text}
    </button>
  );
}
