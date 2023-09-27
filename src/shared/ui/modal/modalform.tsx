import React, { useState } from 'react';
import './modal.css'
import userphoto from '../../assets/img/custom.png'
import uploadphoto from '../../assets/img/upload.png'
import uploadIcon from '../../assets/img/Group.svg'
import Modal from './Modal';

function ModalForm() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className='modalwindow'>
      <img src={userphoto} alt="userphoto" />
      <h1>Фото</h1>
      <button onClick={openModal} className='modalwindowBtn'>
        <img src={uploadphoto} alt="uploaduserphoto" />
        <span>Загрузити аватар</span>
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Клацніть або перетягніть файл у цю область, щоб <br /> завантажити його</h2>
        <p>Завантажене зображення буде використано як ваш аватар або логотип компанії.</p>
        <img src={uploadIcon} alt="uploadIcon" id='uploadIcon' />
        <article className='texthelper'>Supported formats: JPG and PNG. <br />The recommended file size is 256x256 pixels. </article>
        
        
      </Modal>
    </div>
  );
}

export default ModalForm;




// import React, { useState } from 'react';
// import Modal from './Modal';
// import './modal.css'
// import userphoto from '../../assets/img/custom.png'
// import uploadphoto from '../../assets/img/upload.png'
// import uploadIcon from '../../assets/img/Group.svg'

// function ModalForm() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [userImage, setUserImage] = useState(null); 

//   const openModal = () => {
//     setModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     document.body.style.overflow = 'auto';
//   };

//   const handleImageUpload = (image) => {
   
//     setUserImage(image);
//   };

//   return (
//     <div className='modalwindow'>
//       {userImage ? (
//         <img src={userImage} alt="userphoto" />
//       ) : (
//         <img src={userphoto} alt="userphoto" />
//       )}
//       <h1>Фото</h1>
//       <button onClick={openModal} className='modalwindowBtn'>
//         <img src={uploadphoto} alt="uploaduserphoto" />
//         <span>Загрузити аватар</span>
//       </button>
//       <Modal isOpen={isModalOpen} onClose={closeModal} onImageUpload={handleImageUpload}>
//         <h2>Клацніть або перетягніть файл у цю область, щоб <br /> завантажити його</h2>
//         <p>Завантажене зображення буде використано як ваш аватар або логотип компанії.</p>
//         <img src={uploadIcon} alt="uploadIcon" id='uploadIcon' />
//         <article className='texthelper'>Supported formats: JPG and PNG. <br />The recommended file size is 256x256 pixels. </article>
//       </Modal>
//     </div>
//   );
// }


// export default ModalForm;