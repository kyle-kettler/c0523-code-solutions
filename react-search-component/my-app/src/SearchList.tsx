type Props = {
  list: string[];
  searchInput: string;
};

export default function SearchList({ list, searchInput }: Props) {
  const filteredList = list.filter((element) => {
    if (searchInput === '') {
      return element;
    } else {
      return element.toLowerCase().includes(searchInput.toLowerCase());
    }
  });

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
