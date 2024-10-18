import React, { useState } from "react";
import { FaPhone, FaBuilding, FaBriefcase, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { EmployeeContainer, EmployeeInfo, EmployeeImage, AddContactButton, SendEmailButton, InfoWrapper, LinkedinIcon, ButtonsWrapper, ModalOverlay, ModalContent } from "./styles";

interface EmployeeProps {
  name: string;
  ramal: string;
  setor: string;
  cargo: string;
  email?: string; // O e-mail continua opcional
  foto: string;
  linkedin?: string; // Agora, a propriedade LinkedIn será preenchida a partir da planilha
  descricao?: string; // Esta será a descrição (fun fact) que aparecerá na modal
}

const EmployeeCard: React.FC<EmployeeProps> = ({ name, ramal, setor, cargo, email, foto, linkedin, descricao }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Função para converter a imagem para Base64
  const getImageAsBase64 = async (url: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1] || "");
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  // Função que cria e baixa o arquivo VCard
  const handleAddContact = () => {
    getImageAsBase64(foto).then((base64Image) => {
      const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;WORK;VOICE:${ramal}
ORG:${setor}
TITLE:${cargo}
EMAIL;TYPE=INTERNET:${email || ""}
PHOTO;ENCODING=b;TYPE=JPEG:${base64Image}
END:VCARD
      `;

      const blob = new Blob([vCardData], { type: 'text/vcard' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${name}-contact.vcf`;
      link.click();
    });
  };

  const handleSendEmail = () => {
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <EmployeeContainer>
        <EmployeeImage src={foto} alt={`Foto de ${name}`} onClick={openModal} />
        <InfoWrapper>
          <EmployeeInfo>
            <h3 onClick={openModal}>{name}</h3>
            <p><FaPhone /> <span>Ramal:</span> {ramal}</p>
            <p><FaBuilding /> <span>Setor:</span> {setor}</p>
            <p><FaBriefcase /> <span>Cargo:</span> {cargo}</p>
            {email && (
              <p><FaEnvelope /> <span>E-mail:</span> <a href={`mailto:${email}`}>{email}</a></p>
            )}
          </EmployeeInfo>
          <ButtonsWrapper>
            <AddContactButton onClick={handleAddContact}>Adicionar aos Contatos</AddContactButton>
            {email && (
              <SendEmailButton onClick={handleSendEmail}>Enviar E-mail</SendEmailButton>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon><FaLinkedin /></LinkedinIcon>
              </a>
            )}
          </ButtonsWrapper>
        </InfoWrapper>
      </EmployeeContainer>

      {/* Modal para exibir a Descrição */}
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>Sobre {name}</h3>
            {/* Dividindo a descrição em parágrafos */}
            {descricao
              ? descricao.split('\n').map((text, index) => (
                  <p key={index}>{text}</p>
                ))
              : <p>Nenhuma informação adicional disponível.</p>
            }
            <button onClick={closeModal}>Fechar</button>
          </ModalContent>
        </ModalOverlay>
      )}

    </>
  );
};

export default EmployeeCard;
