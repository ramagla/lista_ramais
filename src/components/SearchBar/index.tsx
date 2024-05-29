import React, { useState } from "react";
import { SearchContainer, SearchInput, SearchButton } from "./styles";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value.trim().toLowerCase();
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Buscar por nome, cargo ou departamento..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <SearchButton disabled>Buscar</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
