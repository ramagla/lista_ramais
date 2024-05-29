import React, { useState, useEffect } from "react";
import * as S from "./styles";

const Footer = () => {
  const [lastCommitDate, setLastCommitDate] = useState<string | null>(null);
  const authorName = "Rafael de Almeida";
  const portfolioLink = "https://portif-lio-iota-nine.vercel.app/";

  useEffect(() => {
    fetchLastCommitDate();
  }, []);

  const fetchLastCommitDate = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/ramagla/lista_ramais/commits"
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const lastCommit = data[0];
        const commitDate = new Date(lastCommit.commit.author.date);
        setLastCommitDate(commitDate.toLocaleDateString());
      }
    } catch (error) {
      console.error("Error fetching last commit date:", error);
    }
  };

  return (
    <S.FooterContainer>
      <S.FooterText>
        {lastCommitDate ? (
          <>Última atualização: {lastCommitDate} </>
        ) : (
          <>Carregando data do último commit...</>
        )}{" "}
        | Desenvolvido por{" "}
        <S.Link href={portfolioLink} target="_blank">
          {authorName}
        </S.Link>{" "}
        | &copy; {new Date().getFullYear()} Todos os direitos reservados
      </S.FooterText>
    </S.FooterContainer>
  );
};

export default Footer;
