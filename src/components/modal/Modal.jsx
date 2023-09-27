import React, { useState, useRef } from 'react';
import './modal.css';
import closeBtn from '../../assets/img/Close.svg';

function Modal({ isOpen, onClose, onImageUpload, children }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
  
    if (selectedImage) {
      onImageUpload(selectedImage);
    }

    onClose();
  };

  const handleCrossClick = (e) => {
   
    e.preventDefault();

    onClose();
  };

  const handleModalClick = () => {
 
    fileInputRef.current.click();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <img src={closeBtn} alt="" id='closeBtn'/>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }} 
        />
        {selectedImage && <img src={selectedImage} alt="Selected" />}
        {children}
      </div>
    </div>
  );
}

export default Modal;
