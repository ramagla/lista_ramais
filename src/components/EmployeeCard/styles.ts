import styled from 'styled-components';

export const EmployeeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  position: relative;
`;

export const EmployeeImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: 16px;
  align-items: center;
`;

export const EmployeeInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    cursor: pointer;
  }

  p {
    margin-bottom: 5px;
    font-size: 1rem;

    span {
      font-weight: bold;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  width: 150px; /* Garantindo que ambos os botões tenham a mesma largura */
`;

export const AddContactButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%; /* Para garantir que os botões tenham a mesma largura */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #218838;
  }
`;

export const SendEmailButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%; /* Para garantir que os botões tenham a mesma largura */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }
`;

export const LinkedinIcon = styled.div`
  font-size: 1.5rem;
  color: #0077b5;
  cursor: pointer;
   position: relative; /* Usando position relative */
  top: 48px; /* Altere este valor para descer mais ou menos o ícone */
  margin-top: auto; /* Força o ícone a ser empurrado para baixo */

  &:hover {
    color: #005582;
  }
`;

// Modal Styles
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* A modal cobrirá toda a tela */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Para garantir que a modal fique acima de tudo */
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 30px 40px; /* Maior espaçamento interno */
  border-radius: 15px;
  text-align: justify;
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); /* Sombra mais leve */
  font-family: 'Arial', sans-serif; /* Tipografia mais elegante */
  line-height: 1.6; /* Aumenta o espaçamento entre as linhas para melhorar a legibilidade */


  z-index: 1001; /* Modal acima da overlay */

  h3 {
    margin-bottom: 20px; /* Mais espaçamento abaixo do título */
    font-size: 1.8rem; /* Aumenta o tamanho da fonte do título */
    color: #333;
  }

  p {
    font-size: 1.1rem; /* Tamanho da fonte do parágrafo */
    color: #555; /* Cor mais suave para o texto */
    margin-bottom: 20px; /* Espaçamento entre o texto e o botão */
  }

  button {
    background-color: #007bff;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
