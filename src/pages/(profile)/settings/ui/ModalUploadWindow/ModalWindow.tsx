import React, { useState, useRef } from 'react';
import {
  ModalOverlay,
  HeaderWindow,
  ModalContent,
  ModalImageDesc,
  SelectedImg,
  ModalClose,
  ModalInputText,
  ModalBtnsContainer,
  ModalBtnCancel,
  ModalBtnSave,
} from './styled';
import closeBtn from 'shared/assets/img/Close.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImageUpload: (file: string | ArrayBuffer | null) => void;
  children: React.ReactNode;
  updateWarningData: () => void;
}

export const ModalWindow: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onImageUpload,
  children,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
  const [imagePath, setImagePath] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const fileReaderRef = useRef<FileReader | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      fileReaderRef.current = reader;
      reader.onload = () => {
        const result = reader.result;
        setSelectedImage(result);
        setImagePath(file.name);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      setImagePath('');
    }
  };

  const handleUploadClick = () => {
    if (selectedImage) {
      onImageUpload(selectedImage);
    }
    onClose();
  };

  const handleCancelClick = () => {
    if (fileReaderRef.current) {
      fileReaderRef.current.abort();
    }
    setSelectedImage(null);
    setImagePath('');
  };

  const handleModalClick = () => {
    if (fileInputRef.current && !selectedImage) {
      fileInputRef.current.click();
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          setSelectedImage(result);
          setImagePath(file.name);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div>
      <ModalOverlay 
      // onClick={handleModalClick}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrop(e)}>
        <div onClick={handleModalClick}>
        <ModalContent>
          <HeaderWindow>Клацніть або перетягніть файл у цю область, щоб завантажити його</HeaderWindow>
          <p>Завантажене зображення буде використано як ваш аватар або логотип компанії.</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          {selectedImage ? (
            <ModalImageDesc>
              <SelectedImg src={selectedImage.toString()} alt="Selected" />
              <ModalInputText
                type="text"
                value={imagePath}
                readOnly
                placeholder="Шлях до файлу"
              />
              <ModalBtnsContainer>
                <ModalBtnCancel onClick={handleCancelClick}>Скасувати</ModalBtnCancel>
                <ModalBtnSave onClick={handleUploadClick}>Зберегти</ModalBtnSave>
              </ModalBtnsContainer>
            </ModalImageDesc>
          ) : (
            <>
              {children}
            </>
          )}
        </ModalContent>
      
      </div>
      <ModalClose onClick={onClose}>
        <img src={closeBtn} alt="closebutton" id="closeBtn" />
      </ModalClose>
      </ModalOverlay>
    </div>
  );
};

