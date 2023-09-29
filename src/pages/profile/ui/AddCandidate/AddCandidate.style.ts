// ModalStyled.tsx

import styled, { css } from "styled-components";

interface ModalProps {
  isOpen: boolean;
}

export const ModalWrapper = styled.div<ModalProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  ${(props) =>
    !props.isOpen &&
    css`
      display: none;
    `}
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 480px;
  text-align: center;
`;

export const ModalHeader = styled.h2`
  margin-top: 64px;
  margin-bottom: 8px;
  color: #8054e3;
  text-align: center;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ModalDescription = styled.p`
  color: #8c8c8c;
  text-align: center;
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 24px;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
  margin-bottom: 64px;
`;

export const ModalButton = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${(props) =>
    props.primary
      ? css`
          background-color: #ff8c33;
          color: #fff;
        `
      : css`
          background-color: #fff;
          border: 2px solid #ff8c33;
          color: #ccc;
        `}
`;
