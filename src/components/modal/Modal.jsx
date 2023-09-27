// import React, { useState, useRef } from 'react';
// import './modal.css';
// import closeBtn from '../../assets/img/Close.svg';

// function Modal({ isOpen, onClose, onImageUpload, children }) {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//     }
//   };

  

//   const handleUploadClick = () => {
// <<<<<<< HEAD

// =======
  
// >>>>>>> 67dce8492b616ef5b0cbab446b70b099edf64a3b
//     if (selectedImage) {
//       onImageUpload(selectedImage);
//     }

//     onClose();
//   };

//   const handleCrossClick = (e) => {
// <<<<<<< HEAD
// =======
   
// >>>>>>> 67dce8492b616ef5b0cbab446b70b099edf64a3b
//     e.preventDefault();

//     onClose();
//   };

//   const handleModalClick = () => {
// <<<<<<< HEAD

// =======
 
// >>>>>>> 67dce8492b616ef5b0cbab446b70b099edf64a3b
//     fileInputRef.current.click();
//   };

  

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={handleModalClick}>
//       <div className="modal-content">
//         <button className="modal-close" onClick={onClose}>
//           <img src={closeBtn} alt="" id='closeBtn'/>
//         </button>
//         <input
//           ref={fileInputRef}
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
// <<<<<<< HEAD
//           style={{ display: 'none' }}
// =======
//           style={{ display: 'none' }} 
// >>>>>>> 67dce8492b616ef5b0cbab446b70b099edf64a3b
//         />
//         {selectedImage && <img src={selectedImage} alt="Selected" />}
//         {children}
//       </div>
//     </div>
//   );
// }

// export default Modal;





