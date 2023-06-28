type Props = {
  item: string;
};

export default function Banner({ item }: Props) {
  return <h1>{item}</h1>;
}
