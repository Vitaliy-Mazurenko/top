// import React, { useState, useRef } from 'react';
// import './modal.css';
// import closeBtn from '../../assets/img/Close.svg';

// function Modal({ isOpen, onClose, onImageUpload, children }) {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imagePath, setImagePath] = useState('');
//   const fileInputRef = useRef(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//       setImagePath(file.name); 
//       onImageUpload(URL.createObjectURL(file)); 
//     }
//   };
//   const handleUploadClick = () => {
//     if (selectedImage) {
//       onImageUpload(selectedImage);
//     }
//     onClose();
//   };

//   const handleCrossClick = (e) => {
//     e.preventDefault();
//     onClose();
//   };

//   const handleModalClick = () => {
//     if (!selectedImage) {
//       fileInputRef.current.click();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={handleModalClick}>
//       <div className="modal-content">
//         <button className="modal-close" onClick={onClose}>
//           <img src={closeBtn} alt="" id='closeBtn'/>
//         </button>
        
//           <h2>Клацніть або перетягніть файл у цю область, щоб <br /> завантажити його</h2> 
//           <p>Завантажене зображення буде використано як ваш аватар або логотип компанії.</p>
//           <input
//             ref={fileInputRef}
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             style={{ display: 'none' }}
//             disabled={!!selectedImage} // Отключаем элемент выбора файла, если уже выбрано изображение
//           />
//           {selectedImage ? (
//             <div className='modalImagedesc'>
//               <img src={selectedImage} alt="Selected" className='selectedImg' />
//               <input
//                 type="text"
//                 value={imagePath}
//                 readOnly
//                 placeholder='Путь к файлу'
//                 className='modalInputtext'
//               />
//               <div className='modalBtns'>
//                 <button onClick={handleUploadClick} className='modalBtncancel'>Скасувати</button>
//                 <button onClick={() => fileInputRef.current.click()} className='modalBtnsave'>Зберегти</button>
//               </div>
//             </div>
//           ) : (
//             <>
//               {children}
//             </>
//           )}
        
//       </div>
//     </div>
//   );
// }

// export default Modal;





import React, { useState, useRef } from 'react';
import './modal.css';
import closeBtn from '../../assets/img/Close.svg';

// function Modal({ isOpen, onClose, onImageUpload, children })
function Modal({ isOpen, onClose, onImageUpload, children, updateWarningData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePath, setImagePath] = useState('');
  const fileInputRef = useRef(null);
  const fileReaderRef = useRef(null); // Создаем ref для объекта FileReader

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      fileReaderRef.current = reader; // Сохраняем объект FileReader в ref
      reader.onload = () => {
        setSelectedImage(reader.result);
        setImagePath(file.name);
      };
      reader.readAsDataURL(file);
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
      fileReaderRef.current.abort(); // Отменяем загрузку файла, если пользователь нажал "Отмена"
    }
    setSelectedImage(null); // Сбрасываем выбранное изображение
    setImagePath('');
  };

  const handleCrossClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleModalClick = () => {
    if (!selectedImage) {
      fileInputRef.current.click();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <img src={closeBtn} alt="closebutton" id='closeBtn'/>
        </button>
        
        <h2>Клацніть або перетягніть файл у цю область, щоб <br /> завантажити його</h2> 
        <p>Завантажене зображення буде використано як ваш аватар або логотип компанії.</p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        {selectedImage ? (
          <div className='modalImagedesc'>
            <img src={selectedImage} alt="Selected" className='selectedImg' />
            <input
              type="text"
              value={imagePath}
              readOnly
              placeholder='Путь к файлу'
              className='modalInputtext'
            />
            <div className='modalBtns'>
              <button onClick={handleCancelClick} className='modalBtncancel'>Скасувати</button>
              <button onClick={handleUploadClick} className='modalBtnsave'>Зберегти</button>
            </div>
          </div>
        ) : (
          <>
            {children}
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
