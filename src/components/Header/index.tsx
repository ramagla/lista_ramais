import React from "react";
import { HeaderContainer, Title, Logo, Version } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={require("../../assets/logo.png")} alt="Logo Bras-mol" />
      <Title>Lista de Ramais</Title>
      <Version>Versão 2.0</Version>
    </HeaderContainer>
  );
};

export default Header;
