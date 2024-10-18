import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;  /* Fonte moderna */
  font-size: 2.5rem;                      /* Aumentando o tamanho da fonte */
  font-weight: 700;                       /* Negrito */
  color: #333;                            /* Cor neutra e agradável */
  text-align: center;                     /* Centralizando o texto */
  margin: 0;
  margin-top: 10px;
  text-transform: uppercase;              /* Letras em maiúsculas */
  letter-spacing: 1.5px;                  /* Espaçamento entre letras */
  line-height: 1.2;                       /* Melhorar a legibilidade */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Sombra leve para destacar */
  
  @media (max-width: 768px) {
    font-size: 2rem;                      /* Ajuste para dispositivos móveis */
    margin-bottom: 20px;
  }
`;


export const Logo = styled.img`
  width: 80px;
  height: auto;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Version = styled.a`
  font-size: 12px;
  margin-right: 16px;
  margin-bottom: 40px;
  text-decoration: underline;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-right: 0;
  }
`;

export const Link = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: #333;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
