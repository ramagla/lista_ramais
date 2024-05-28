import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-bottom: 20px;
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os itens horizontalmente */
  text-align: center;
`;

export const SearchInput = styled.input`
  padding: 5px;
  width: 100%;
  max-width: 250px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  margin-bottom: 10px;
`;

export const SearchButton = styled.button`
  margin: 0 auto; /* Centraliza o botão horizontalmente */
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: #0000ff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0022ff;
  }
`;
