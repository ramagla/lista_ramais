import React, { useState } from "react";
import { FaPhone, FaBuilding, FaBriefcase, FaEnvelope, FaLinkedin } from "react-icons/fa";
import {
  EmployeeContainer,
  EmployeeInfo,
  EmployeeImage,
  AddContactButton,
  SendEmailButton,
  InfoWrapper,
  LinkedinIcon,
  ButtonsWrapper,
  ModalOverlay,
  ModalContent,
} from "./styles";

import { QRCodeCanvas } from "qrcode.react";

interface EmployeeProps {
  name: string;
  ramal: string;
  setor: string;
  cargo: string;
  email?: string;
  foto: string;
  linkedin?: string;
  descricao?: string;
}

const EmployeeCard: React.FC<EmployeeProps> = ({
  name,
  ramal,
  setor,
  cargo,
  email,
  foto,
  linkedin,
  descricao,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

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
      const blob = new Blob([vCardData], { type: "text/vcard" });
      const link = document.createElement("a");
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

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // ✅ QR code agora usando o formato vCard
 const getQRCodeValue = () => {
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ") || firstName;

  return `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${name}
ORG:${setor}
TITLE:${cargo}
TEL;WORK;VOICE:${ramal}
EMAIL:${email || ""}
END:VCARD`;
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
              <p>
                <FaEnvelope /> <span>E-mail:</span> <a href={`mailto:${email}`}>{email}</a>
              </p>
            )}
          </EmployeeInfo>

          {/* ✅ QR Code bonito e funcional */}
          <div style={{ marginTop: "10px", marginBottom: "10px", textAlign: "center" }}>
            <QRCodeCanvas value={getQRCodeValue()} size={100} />
            <p style={{ fontSize: "10px", color: "#777", marginTop: "4px" }}>
              Escaneie para salvar contato
            </p>
          </div>

          <ButtonsWrapper>
            <AddContactButton onClick={handleAddContact}>Adicionar aos Contatos</AddContactButton>
            {email && (
              <SendEmailButton onClick={handleSendEmail}>Enviar E-mail</SendEmailButton>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon>
                  <FaLinkedin />
                </LinkedinIcon>
              </a>
            )}
          </ButtonsWrapper>
        </InfoWrapper>
      </EmployeeContainer>

      {/* Modal de descrição */}
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>Sobre {name}</h3>
            {descricao
              ? descricao.split("\n").map((text, index) => <p key={index}>{text}</p>)
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
