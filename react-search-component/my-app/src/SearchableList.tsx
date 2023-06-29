import SearchInput from './SearchInput';
import SearchList from './SearchList';
import { useState } from 'react';

type Props = {
  list: string[];
};

export default function SearchableList({ list }: Props) {
  const [search, setSearch] = useState('');

  function handleSearchInput(searchInput: string) {
    setSearch(searchInput);
  }

  return (
    <div>
      <SearchInput onSearchInput={handleSearchInput} />
      <SearchList searchInput={search} list={list} />
    </div>
  );
}
