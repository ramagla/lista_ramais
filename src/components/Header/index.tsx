import { HeaderContainer, Title, Logo, Version } from "./styles";

const Header = () => {
  const commitsUrl = "https://github.com/ramagla/lista_ramais/commits";
  const websiteUrl = "https://www.brasmol.com.br";  // URL do site

  return (
    <HeaderContainer>
      {/* Torna o logo clicável e redireciona para o site */}
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
        <Logo src={require("../../assets/logo.png")} alt="Logo Bras-mol" />
      </a>
      <Title>Lista de Ramais</Title>
      <Version href={commitsUrl} target="_blank" rel="noopener noreferrer">
        Versão 4.0
      </Version>
    </HeaderContainer>
  );
};

export default Header;
