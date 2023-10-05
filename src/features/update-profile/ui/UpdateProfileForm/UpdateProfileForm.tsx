import React, { useState } from 'react';
import { InputBox } from 'features/update-profile/ui/Input/Input';
import styled from 'styled-components';
import { MissingDataWarning } from '../MissingDataWarning/MissingDataWarning';
import { SuccessWarning } from '../SuccessWarning/SuccessWarning';

export const SaveButton = styled.button`
  width: 17.625rem; /* 282px */
  height: 3.1875rem; /* 51px */
  font-family: 'Raleway', sans-serif;
  color: #ffffff;
  background: #ff8c33;
  font-size: 1rem; /* 16px */
  font-weight: 500;
  border: none;
  margin-top: 1.5rem; /* 24px */
  cursor: pointer;
`

export const UpdateProfileForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [showWarningPage, setShowWarningPage] = useState(true);


  const updateFormState = () => {

    const isFilled =
      email.trim() !== '' &&
      firstName.trim() !== '' &&
      secondName.trim() !== '' &&
      companyName.trim() !== '' &&
      position.trim() !== '';
    setIsFormFilled(isFilled);
    setShowWarningPage(!isFilled);
  };


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    updateFormState();
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    updateFormState();
  };

  const handleSecondNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondName(e.target.value);
    updateFormState();
  };

  const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
    updateFormState();
  };

  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(e.target.value);
    updateFormState();
  };


  const handleSaveButtonClick = () => {
    setShowWarningPage(!isFormFilled);
    console.log('Форма ' + (showWarningPage ? 'не ' : '') + 'заполнена');
  }

  return (
    <div>
      {showWarningPage ? <MissingDataWarning /> : <SuccessWarning />}

      <form>
        <InputBox
          label="E-mail"
          placeholder="ceo@digitaluniverse.com"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <InputBox
          label="First Name"
          placeholder="Enter Your First Name"
          required
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <InputBox
          label="Second Name"
          placeholder="Enter Your Full Name"
          required
          value={secondName}
          onChange={handleSecondNameChange}
        />
        <InputBox
          label="Company Name"
          placeholder="Enter Company Name"
          required
          value={companyName}
          onChange={handleCompanyNameChange}
        />
        <InputBox
          label="Position"
          placeholder="Enter Your Position"
          required
          value={position}
          onChange={handlePositionChange}
          className="inputform"
        />
        <SaveButton
          onClick={handleSaveButtonClick}
        >
          Зберегти
        </SaveButton>
      </form>
    </div>
  );
};
