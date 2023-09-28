import { useState, useRef, PropsWithChildren } from 'react';
import './modal.css';
import closeBtn from '../../assets/img/Close.svg';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean
  onClose: () => void
  // onImageUpload: (img: string) => void
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  const [selectedImage] = useState(null);
  const fileInputRef = useRef<null | HTMLInputElement>(null);

  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {

      // setSelectedImage(URL.createObjectURL(file));
    }
  };


  // const handleUploadClick = () => {
  //   if (selectedImage) {
  //     onImageUpload(selectedImage);
  //   }

  //   onClose();
  // };
  // const handleCrossClick = (e) => {
  //   e.preventDefault();

  //   onClose();
  // };

  const handleModalClick = () => {
    fileInputRef.current?.click();
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





