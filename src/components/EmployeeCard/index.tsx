import React from "react";
import { EmployeeContainer, EmployeeInfo, EmployeeImage } from "./styles";
import { Employee } from "../../types";

interface EmployeeProps {
  name: string;
  ramal: string;
  setor: string;
  cargo: string;
  email: string;
  foto: string;
}

const EmployeeCard: React.FC<EmployeeProps> = ({
  name,
  ramal,
  setor,
  cargo,
  email,
  foto,
}) => {
  return (
    <EmployeeContainer>
      <EmployeeImage src={foto} alt={`Foto de ${name}`} />
      <EmployeeInfo>
        <h3>{name}</h3>
        <p>Ramal: {ramal}</p>
        <p>Setor: {setor}</p>
        <p>Cargo: {cargo}</p>
        <p>
          E-mail: <a href={`mailto:${email}`}>{email}</a>
        </p>
      </EmployeeInfo>
    </EmployeeContainer>
  );
};

export default EmployeeCard;
