import React, { useState } from "react";
import { SearchContainer, SearchInput, SearchButton } from "./styles";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm.trim().toLowerCase());
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Buscar por nome ou cargo..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <SearchButton onClick={handleSearch}>Buscar</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
