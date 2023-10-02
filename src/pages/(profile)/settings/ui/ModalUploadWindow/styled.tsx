import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  padding: 64px 40px;
  top: 25%;
  left: 33%;
  background-color: #f5f5f5;
  display: flex;
  width: 480px;
  height: 402px;
  border: 1px #8054E3 solid;
  
`;

export const ModalHeader = styled.h2`
  color: #48484a;
  font-size: 28px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.84px;
  margin-top: 18px;
`;
export const HeaderWindow = styled.h2`
    color: #8054E3;
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
`
export const ModalContent = styled.div`
  
  justify-content: center;
  p {
    margin-top: 10px;
    color: #808080;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const UploadIcon = styled.img`
  margin-top: 60px;
  width: 101px;
  height: 64px;
`;

export const TextHelper = styled.div`
  color: #8054E3;
  font-size: 12px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  line-height: 16px;
  margin-top: 16px;
`;

export const ModalImageDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 95px;
  gap: 24px;
`;

export const SelectedImg = styled.img`
  max-width: 300px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 2px #FF8C33 solid;
  margin-left: 65px;
  margin-top: 24px;
`;

export const ModalClose = styled.button`
  top: 0;
  margin-top: 250px;
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  width: 10px;
  height: 10px;
  z-index: 9999;
  margin-left: 230px;
`;

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ModalInputText = styled.input`
  width: 209px;
  height: 20px;
  color: #808080;
  font-size: 12px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  line-height: 20px;
`;

export const ModalWindow = styled.div`
  text-align: center;
  margin-top: 190px;
  margin-left: 30px;
`;

export const ModalWindowBtn = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 171px;
  padding: 6px 16px;
  height: 32px;
  text-align: center;
  color: #8054E3;
  background: #ffffff;
  border: 1px #8054E3 solid;
  margin-left: 10px;
  margin-top: 18px;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
`;

export const ModalBtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-left: 5px;
`;

export const ModalBtnCancel = styled.button`
  color: #808080;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  line-height: 22px;
  border: 1px #FF8C33 solid;
  width: 102px;
  height: 32px;
  background: #ffffff;
  border-radius: 2px;
  cursor: pointer;
`;

export const UserPhotoMain = styled.img`
  width: 176px;
  height: 176px;
  border: 4px #FF8C33 solid;
  border-radius: 9999px;
`;

export const ModalBtnSave = styled.button`
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  color: white;
  font-size: 14px;
  font-family: Raleway;
  font-weight: 400;
  line-height: 22px;
  background: #FF8C33;
  width: 74px;
  height: 32px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;
