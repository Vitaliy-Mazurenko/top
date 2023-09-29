// import React, { useState, useRef } from 'react';
// import './modal.css';
// import closeBtn from '../../assets/img/Close.svg';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void; 
//   onImageUpload: (file: File) => void; 
//   children: React.ReactNode; 
//   updateWarningData: () => void;
// }
// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onImageUpload, children }) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imagePath, setImagePath] = useState('');
//   const fileInputRef = useRef<HTMLInputElement | null>(null);
//   const fileReaderRef = useRef<FileReader | null>(null);

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const file = e.target.files?.[0];
//   if (file) {
//     const reader = new FileReader();
//     fileReaderRef.current = reader; 
//     reader.onload = () => {
//       if (typeof reader.result === 'string' || reader.result === null) {
//         setSelectedImage(reader.result);
//         setImagePath(file.name);
//       }
//     };
//     reader.readAsDataURL(file);
//   } else {
//     setSelectedImage(null); 
//     setImagePath('');
//   }
// };
  

//   const handleUploadClick = () => {
//     if (selectedImage) {
//       onImageUpload(selectedImage);
//     }
//     onClose();
//   };
  
//   const handleCancelClick = () => {
//     if (fileReaderRef.current) {
//       fileReaderRef.current.abort(); 
//     }
//     setSelectedImage(null); 
//     setImagePath('');
//   };


//  const handleModalClick = () => {
//   if (fileInputRef.current && !selectedImage) {
//     fileInputRef.current.click();
//   }
// };

//   if (!isOpen) return null;

//   return (
//     <div>
//     <div className="modal-overlay" onClick={handleModalClick}>
//       <div className="modal-content"> 
//         <h2>Клацніть або перетягніть файл у цю область, щоб <br /> завантажити його</h2> 
//         <p>Завантажене зображення буде використано як ваш аватар або логотип компанії.</p>
//         <input
//           ref={fileInputRef}
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           style={{ display: 'none' }}
//         />
//         {selectedImage ? (
//           <div className='modalImagedesc'>
//             <img src={selectedImage} alt="Selected" className='selectedImg' />
//             <input
//               type="text"
//               value={imagePath}
//               readOnly
//               placeholder='Путь к файлу'
//               className='modalInputtext'
//             />
//             <div className='modalBtns'>
//               <button onClick={handleCancelClick} className='modalBtncancel'>Скасувати</button>
//               <button onClick={handleUploadClick} className='modalBtnsave'>Зберегти</button>
//             </div>
//           </div>
//         ) : (
//           <>
//             {children}
//           </>
//         )}
//       </div>
//     </div>
    
//       <button className="modal-close" onClick={onClose}>
//       <img src={closeBtn} alt="closebutton" id='closeBtn'/>
//     </button>
//    </div>
//   );
// }

// export default Modal;





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
} from './ModalWindowStyles';
import closeBtn from 'shared/assets/img/Close.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImageUpload: (file: string | ArrayBuffer | null) => void;
  children: React.ReactNode;
  updateWarningData: () => void;
}

const Modal: React.FC<ModalProps> = ({
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
          const result = reader.result
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

  if (!isOpen) return null;

  return (
    <div>
      <ModalOverlay onClick={handleModalClick}>
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
                placeholder="Путь к файлу"
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
      </ModalOverlay>
      <ModalClose onClick={onClose}>
        <img src={closeBtn} alt="closebutton" id="closeBtn" />
      </ModalClose>
    </div>
  );
};

export default Modal;
