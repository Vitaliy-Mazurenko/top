// Modal.tsx
import React from "react";
import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalDescription,
  ModalButtons,
  ModalButton,
} from "./AddCandidate.style";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>Додати кандидата в проєкт?</ModalHeader>
        <ModalDescription>Ім’я кандидата</ModalDescription>
        <img
          src="./src/shared/assets/img/modalImage.jpg"
          alt="Фото кандидата"
          className="modalImage"
        />
        <ModalButtons>
          <ModalButton onClick={onClose}>Скасувати</ModalButton>
          <ModalButton primary>Додати</ModalButton>
        </ModalButtons>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
