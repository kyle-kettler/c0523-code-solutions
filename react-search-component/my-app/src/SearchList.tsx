type Props = {
  list: string[];
  searchInput: string;
};

export default function SearchList({ list, searchInput }: Props) {
  const filteredList = list.filter((e) =>
    searchInput ? e.toLowerCase().includes(searchInput.toLowerCase()) : e
  );

  if (filteredList.length === 0) {
    return <p>No items match the filter.</p>;
  }

  return (
    <ul>
      {filteredList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
