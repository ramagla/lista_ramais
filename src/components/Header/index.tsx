import { HeaderContainer, Title, Logo, Version } from "./styles";

const Header = () => {
  // Supondo que você tenha uma URL para os commits
  const commitsUrl = "https://github.com/ramagla/lista_ramais/commits";

  return (
    <HeaderContainer>
      <Logo src={require("../../assets/logo.png")} alt="Logo Bras-mol" />
      <Title>Lista de Ramais</Title>
      <Version href={commitsUrl} target="_blank" rel="noopener noreferrer">
        Versão 2.0
      </Version>
    </HeaderContainer>
  );
};

export default Header;
