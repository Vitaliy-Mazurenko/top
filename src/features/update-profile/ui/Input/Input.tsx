import React from 'react';
import styled from 'styled-components';

const InputBoxContainer = styled.div`
  position: relative;
  margin-top: 44px;
`;

const InputLabel = styled.label`
  position: absolute;
  top: -20px;
  color: #48484a;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.28px;
  margin-bottom: 2px;
  /* margin-left: 25px; */
`;

const InputElement = styled.input`
  background: #fff;
  border-radius: 2px;
  width: 20rem; /* 320px */
  height: 2.625rem; /* 42px */
  color: #8e8e93;
  font-size: 0.875rem; /* 14px */
  font-weight: 400;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.28px;
  line-height: 1.375rem; /* 22px */
  border: 1px solid #ede4b7;
  padding: 0.3125rem 0.75rem; /* 5px 12px */
`;


interface InputBoxProps {
  label: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox: React.FC<InputBoxProps> = ({
  label,
  placeholder,
  required = false,
}) => {
  return (
    <InputBoxContainer>
      <InputLabel>{label}</InputLabel>
      <InputElement
        type="text"
        placeholder={placeholder}
        required={required}
        className='inputform' 
      />
    </InputBoxContainer>
  );
};
