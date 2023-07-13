type Props = {
  item: string;
};

export default function Image({ item }: Props) {
  return <img src={item} alt={item} className="slider-img" />;
}
