import { useState, useRef } from 'react';
import './modal.css';
import closeBtn from '../../assets/img/Close.svg';
// @ts-ignore
function Modal({ isOpen, onClose, onImageUpload, children }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  // @ts-ignore
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // @ts-ignore
      setSelectedImage(URL.createObjectURL(file));
    }
  };


  // @ts-ignore
  const handleUploadClick = () => {
    if (selectedImage) {
      onImageUpload(selectedImage);
    }

    onClose();
  };
  // @ts-ignore
  const handleCrossClick = (e) => {
    e.preventDefault();

    onClose();
  };

  const handleModalClick = () => {
    // @ts-ignore
    fileInputRef.current.click();
  };



  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <img src={closeBtn} alt="" id='closeBtn' />
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





