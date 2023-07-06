import { FiSearch } from 'react-icons/fi';

type Props = {
  onSearchInput: (value: string) => void;
};

export default function SearchInput({ onSearchInput }: Props) {
  return (
    <div
      style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <input
        style={{ paddingLeft: '1.25rem' }}
        type="search"
        className="search-input"
        placeholder="Search"
        onChange={(e) => onSearchInput(e.currentTarget.value)}></input>
      <span style={{ position: 'absolute', left: '0.25rem', marginTop: '2px' }}>
        <FiSearch />
      </span>
    </div>
  );
}
