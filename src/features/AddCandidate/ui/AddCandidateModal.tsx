// Modal.tsx
import React from "react";
import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalDescription,
  ModalButtons,
  ModalButton,
} from "./AddCandidateModal.style";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: string;
}

export const AddCandidateModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalWrapper isOpen={isOpen} onClick={handleBackdropClick}>
      <ModalContent>
        <ModalHeader>Додати кандидата в проєкт?</ModalHeader>
        <ModalDescription>Ім’я кандидата</ModalDescription>
        <img
          src="/modalImage.jpg"
          alt="Фото кандидата"
          className="modalImage"
        />
        <ModalButtons>
          <ModalButton
            style={{ backgroundColor: "#fff", color: "#808080" }}
            onClick={onClose}
          >
            Скасувати
          </ModalButton>
          <ModalButton style={{ backgroundColor: "#FF8C33", color: "#fff" }}>
            Додати
          </ModalButton>
        </ModalButtons>
      </ModalContent>
    </ModalWrapper>
  );
};
