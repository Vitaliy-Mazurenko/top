import { useState } from 'react';
import { ModalWindow } from './ModalWindow';
import {
  ModalWindow as ModalWindowStyled,
  ModalHeader,
  ModalWindowBtn,
  TextHelper,
  UploadIcon,
  UserPhotoMain,
} from './styled';
import userphoto from 'shared/assets/img/custom.png';
import uploadphoto from 'shared/assets/img/upload.png';
import uploadIcon from 'shared/assets/img/Group.svg';

export function ModalUploadForm() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUserPhoto, setSelectedUserPhoto] = useState<string | ArrayBuffer | null>(null);

  const handleImageUpload = (file: string | ArrayBuffer | null) => {
    setSelectedUserPhoto(file);
  };
  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  function updateWarningData(): void {
    throw new Error('Function not implemented.');

  }
  // selectedUserPhoto instanceof File ? URL.createObjectURL(selectedUserPhoto) : selectedUserPhoto || userphoto
  return (
    <ModalWindowStyled>
      <UserPhotoMain src={selectedUserPhoto?.toString() || userphoto} alt="userphoto" />
      <ModalHeader>Фото</ModalHeader>
      <ModalWindowBtn onClick={openModal}>
        <img src={uploadphoto} alt="uploaduserphoto" />
        <span>Загрузити аватар</span>
      </ModalWindowBtn>
      <ModalWindow isOpen={isModalOpen} onClose={closeModal} onImageUpload={handleImageUpload} updateWarningData={updateWarningData}>
        <UploadIcon src={uploadIcon} alt="uploadIcon" id="uploadIcon" />
        <TextHelper>Supported formats: JPG and PNG. <br />The recommended file size is 256x256 pixels.</TextHelper>
      </ModalWindow>
    </ModalWindowStyled>
  );
}
