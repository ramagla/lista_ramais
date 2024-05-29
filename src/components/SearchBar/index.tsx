import React, { useState } from "react";
import { SearchContainer, SearchInput } from "./styles";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.trim().toLowerCase(); // Padronizando o termo de busca
    setSearchTerm(term);
    onSearch(term); // Realizando a busca automaticamente conforme o usuário digita
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Buscar por nome, cargo ou setor..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
};

export default SearchBar;
