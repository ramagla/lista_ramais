import React, { useState, useEffect } from "react";
import * as S from "./styles";

const Footer = () => {
  const [lastCommitDate, setLastCommitDate] = useState<string | null>(null);
  const authorName = "Rafael de Almeida";
  const portfolioLink = "https://portif-lio-iota-nine.vercel.app/";

  // 🔧 Supressão do aviso do ESLint de dependência ausente
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        console.log("Commit Date:", commitDate);
        setLastCommitDate(formatDateTime(commitDate));
      }
    } catch (error) {
      console.error("Error fetching last commit date:", error);
    }
  };

  const formatDateTime = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
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
