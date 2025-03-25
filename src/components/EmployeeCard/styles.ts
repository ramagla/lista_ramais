import styled from "styled-components";

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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 12px;
  }
`;

export const EmployeeImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: 16px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
    align-items: center;
    text-align: center;
  }
`;

export const EmployeeInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    margin-bottom: 5px;
    font-size: 1rem;

    span {
      font-weight: bold;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  width: 150px;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

export const AddContactButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
  }
`;

export const SendEmailButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
  }
`;

export const LinkedinIcon = styled.div`
  font-size: 1.5rem;
  color: #0077b5;
  cursor: pointer;
  position: relative;
  top: 48px;
  margin-top: auto;

  &:hover {
    color: #005582;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 40px; /* Posiciona o ícone no topo */
    left: 30px; /* Posiciona o ícone à esquerda */
    transform: translate(-10%, -10%); /* Ajusta a posição para um alinhamento melhor */
    font-size: 2.3rem; /* Ajuste o tamanho do ícone para telas menores */
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;



export const ModalContent = styled.div`
  background: #fff;
  padding: 30px 40px;
  border-radius: 15px;
  text-align: justify;
  max-width: 500px;
  width: 100%;
  /* IMPORTANTE: limite de altura e scroll */
  max-height: 80vh;
  overflow-y: auto;

  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  z-index: 1001;

  h3 {
    margin-bottom: 20px;
    font-size: 1.8rem;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 20px;
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

  @media (max-width: 768px) {
    max-width: 90%; 
    padding: 20px 30px;

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
