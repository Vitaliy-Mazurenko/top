import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  padding: 4rem 2.5rem; /* 64px 40px */
  top: 25%;
  left: 33%;
  background-color: #f5f5f5;
  display: flex;
  width: 30rem; /* 480px */
  height: 25.125rem; /* 402px */
  border: 1px #8054E3 solid;
  @media (max-width: 480px) {
    left: 3%;
    flex-grow: 1;
    width: 90%;
    height: 21.9rem;
  }
`;




export const HeaderModal = styled.h3 `
  color: #333333;
  font-size: 18px;
  font-family: Raleway;
  font-weight: 500;
  line-height: 14px;
  margin-top: 5px;
  margin-right: 7%;
  `

export const HeaderWindow = styled.h2`
  color: #8054E3;
  font-size: 1rem; /* 16px */
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
`;

export const ModalContent = styled.div`
  justify-content: center;
  p {
    margin-top: 0.625rem; /* 10px */
    color: #808080;
    font-size: 0.875rem; /* 14px */
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    line-height: 1.125rem; /* 18px */
  }
`;

export const UploadIcon = styled.img`
  margin-top: 3rem; /* 60px */
  width: 80%; /* 101px */
  height: 4rem; /* 64px */
  @media (max-width: 340px) {
    display: none;
  }
  @media (max-width: 480px) {
    margin-left: 10%;
  }

`;

export const TextHelper = styled.div`
  color: #8054E3;
  font-size: 0.75rem; /* 12px */
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  width: 100%;
  text-align: center;
  line-height: 1rem; /* 16px */
  margin-top: 1rem; /* 16px */
  @media (max-width: 480px) {
  }
`;

export const ModalImageDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5.9375rem; /* 95px */
  gap: 1.5rem; /* 24px */
`;

export const SelectedImg = styled.img`
  max-width: 18.75rem; /* 300px */
  border-radius: 50%;
  width: 5rem; /* 80px */
  height: 5rem; /* 80px */
  border: 0.125rem #FF8C33 solid; /* 2px #FF8C33 solid */
  margin-left: 4.0625rem; /* 65px */
  margin-top: 1.5rem; /* 24px */
`;

export const ModalClose = styled.button`
  top: 0;
  right: 0;
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  width: 0.625rem; /* 10px */
  height: 0.625rem; /* 10px */
  margin-top: 2.5rem;
  margin-right: 2.5rem;
`;


export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* 24px */
`;

export const ModalInputText = styled.input`
  width: 13.0625rem; /* 209px */
  height: 1.25rem; /* 20px */
  color: #808080;
  font-size: 0.75rem; /* 12px */
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  line-height: 1.25rem; /* 20px */
`;

export const ModalWindow = styled.div`
  margin-top: 11.875rem; /* 190px */
  margin-left: 1.875rem; /* 30px */
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 7px;
  }
`;


export const ModalWindowBtn = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 0.25rem; /* 4px */
  width: 100%; /* 171px */
  padding: 0.375rem 1rem; /* 6px 16px */
  height: 2rem; /* 32px */
  text-align: center;
  color: #8054E3;
  background: #ffffff;
  border: 0.0625rem #8054E3 solid; /* 1px #8054E3 solid */
  margin-left: 0.625rem; /* 10px */
  margin-top: 1.125rem; /* 18px */
  font-size: 0.875rem; /* 14px */
  font-family: 'Inter', sans-serif;
  font-weight: 400;

  @media (max-width: 480px) {
    width: 38%;
    height: 15%;
    margin-right: 7%;
  }
`;

export const ModalBtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem; /* 8px */
  margin-left: 0.3125rem; /* 5px */
`;

export const ModalBtnCancel = styled.button`
  color: #808080;
  font-size: 0.875rem; /* 14px */
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  line-height: 1.375rem; /* 22px */
  border: 0.0625rem #FF8C33 solid; /* 1px #FF8C33 solid */
  width: 6.375rem; /* 102px */
  height: 2rem; /* 32px */
  background: #ffffff;
  border-radius: 0.125rem; /* 2px */
  cursor: pointer;
`;

export const UserPhotoMain = styled.img`
  width: 11rem; /* 176px */
  height: 11rem; /* 176px */
  border: 0.25rem #FF8C33 solid; /* 4px #FF8C33 solid */
  border-radius: 6.25rem; /* 9999px */
  @media (max-width: 480px) {
    width: 30%;
    height: 30%;
    margin-top: -120px;
    margin-right: 7%;
  }
`;

export const ModalBtnSave = styled.button`
  font-size: 0.875rem; /* 14px */
  font-family: 'Raleway', sans-serif;
  color: white;
  font-size: 0.875rem; /* 14px */
  font-family: Raleway;
  font-weight: 400;
  line-height: 1.375rem; /* 22px */
  background: #FF8C33;
  width: 4.625rem; /* 74px */
  height: 2rem; /* 32px */
  border: none;
  border-radius: 0.125rem; /* 2px */
  cursor: pointer;
`;


export const ModalWindowStyled = styled.div `
  display: flex;
  justify-content: center;
  text-align: center;

`