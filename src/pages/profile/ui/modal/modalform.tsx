// import { useState } from 'react';
// import Modal from './Modal';
// import './modal.css';
// import userphoto from '../../assets/img/custom.png';
// import uploadphoto from '../../assets/img/upload.png';
// import uploadIcon from '../../assets/img/Group.svg';

// function ModalForm() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedUserPhoto, setSelectedUserPhoto] = useState<File | null>(null);

//   const handleImageUpload = (file: File) => {
//     setSelectedUserPhoto(file);
//   };
//   const openModal = () => {
//     setModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };
 
//   const closeModal = () => {
//     setModalOpen(false);
//     document.body.style.overflow = 'auto';
//   };
  

//   function updateWarningData(): void {
//     throw new Error('Function not implemented.');
//   }

//   return (
//     <div className='modalwindow'>
//       <img src={selectedUserPhoto || userphoto} alt="userphoto" className='userPhotomain' /> 
//       <h1 className='modalwindow__header'>Фото</h1>
//       <button onClick={openModal} className='modalwindowBtn'>
//         <img src={uploadphoto} alt="uploaduserphoto" />
//         <span>Загрузити аватар</span>
//       </button>
//       <Modal isOpen={isModalOpen} onClose={closeModal} onImageUpload={handleImageUpload} updateWarningData={updateWarningData}> 
//         <img src={uploadIcon} alt="uploadIcon" id='uploadIcon' />
//         <article className='texthelper'>Supported formats: JPG and PNG. <br />The recommended file size is 256x256 pixels. </article>
//       </Modal>
//     </div>
//   );
// }

// export default ModalForm;





import { useState } from 'react';
import Modal from './Modal';
import {
  ModalWindow,
  ModalHeader,
  ModalWindowBtn,
  TextHelper,
  UploadIcon,
  UserPhotoMain,
} from './ModalWindowStyles';
import userphoto from '../../../../shared/assets/img/custom.png';
import uploadphoto from '../../../../shared/assets/img/upload.png';
import uploadIcon from '../../../../shared/assets/img/Group.svg';

function ModalForm() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUserPhoto, setSelectedUserPhoto] = useState<File | null>(null);

  const handleImageUpload = (file: File) => {
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

  return (
    <ModalWindow>
      <UserPhotoMain src={selectedUserPhoto || userphoto} alt="userphoto" />
      <ModalHeader>Фото</ModalHeader>
      <ModalWindowBtn onClick={openModal}>
        <img src={uploadphoto} alt="uploaduserphoto" />
        <span>Загрузити аватар</span>
      </ModalWindowBtn>
      <Modal isOpen={isModalOpen} onClose={closeModal} onImageUpload={handleImageUpload} updateWarningData={updateWarningData}>
        <UploadIcon src={uploadIcon} alt="uploadIcon" id="uploadIcon" />
        <TextHelper>Supported formats: JPG and PNG. <br />The recommended file size is 256x256 pixels.</TextHelper>
      </Modal>
    </ModalWindow>
  );
}

export default ModalForm;
