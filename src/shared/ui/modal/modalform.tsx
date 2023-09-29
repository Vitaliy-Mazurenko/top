// import React, { useState } from 'react';
// import Modal from './Modal';
// import './modal.css'
// import userphoto from '../../assets/img/custom.png'
// import uploadphoto from '../../assets/img/upload.png'
// import uploadIcon from '../../assets/img/Group.svg'

// function ModalForm() {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     document.body.style.overflow = 'auto';
//   };

//   return (
//     <div className='modalwindow'>
//       <img src={userphoto} alt="userphoto" />
//       <h1>Фото</h1>
//       <button onClick={openModal} className='modalwindowBtn'>
//         <img src={uploadphoto} alt="uploaduserphoto" />
//         <span>Загрузити аватар</span>
//       </button>
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <img src={uploadIcon} alt="uploadIcon" id='uploadIcon' />
//         <article className='texthelper'>Supported formats: JPG and PNG. <br />The recommended file size is 256x256 pixels. </article>
//       </Modal>
//     </div>
//   );
// }

// export default ModalForm;

import { useState } from 'react';
import Modal from './Modal';
import './modal.css';
import userphoto from '../../assets/img/custom.png';
import uploadphoto from '../../assets/img/upload.png';
import uploadIcon from '../../assets/img/Group.svg';

function ModalForm() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUserPhoto, setSelectedUserPhoto] = useState<null | string | ArrayBuffer>(null);

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
      <img src={selectedUserPhoto?.toString() || userphoto} alt="userphoto" className='userPhotomain' />
      <h1 className='modalwindow__header'>Фото</h1>
      <button onClick={openModal} className='modalwindowBtn'>
        <img src={uploadphoto} alt="uploaduserphoto" />
        <span>Загрузити аватар</span>
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} onImageUpload={setSelectedUserPhoto}>
        <img src={uploadIcon} alt="uploadIcon" id='uploadIcon' />
        <article className='texthelper'>Supported formats: JPG and PNG. <br />The recommended file size is 256x256 pixels. </article>
      </Modal>
    </div>
  );
}

export default ModalForm;
