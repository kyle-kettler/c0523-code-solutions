type Props = {
  onSearchInput: Function;
};

export default function SearchInput({ onSearchInput }: Props) {
  return (
    <input
      type="search"
      className="search-input"
      placeholder="Search"
      onChange={(e) => onSearchInput(e.currentTarget.value)}></input>
  );
}
