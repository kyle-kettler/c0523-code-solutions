type Props = {
  items: string[];
};

export default function Indicators({ items }: Props) {
  return (
    <div>
      {items.map((item, index) => (
        <button>{index}</button>
      ))}
    </div>
  );
}
