import React from "react";
import { EmployeeContainer, EmployeeInfo, EmployeeImage } from "./styles";

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
        <p>
          {" "}
          <span>Ramal:</span> {ramal}
        </p>
        <p>
          {" "}
          <span>Setor:</span> {setor}
        </p>
        <p>
          {" "}
          <span>Cargo:</span> {cargo}
        </p>
        <p>
          <span>E-mail:</span> <a href={`mailto:${email}`}>{email}</a>
        </p>
      </EmployeeInfo>
    </EmployeeContainer>
  );
};

export default EmployeeCard;
