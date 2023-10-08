// import React, { useState } from 'react';
// import InputBoxYellow from 'shared/ui/reusable_input/InputBoxYellow';
// import WarningPageGreen from 'shared/ui/ReusableWarningTableGreen/WarningPageGreen';
// import WarningPageBlue from 'shared/ui/ReusableWarningTableBlue/WarningPageBlue';
// import styled from 'styled-components';


// export const SaveButton = styled.button`
//   width: 17.625rem; /* 282px */
//   height: 3.1875rem; /* 51px */
//   font-family: 'Raleway', sans-serif;
//   color: #ffffff;
//   background: #ff8c33;
//   font-size: 1rem; /* 16px */
//   font-weight: 500;
//   border: none;
//   margin-top: 1.5rem; /* 24px */
//   cursor: pointer;
// `;

// const RegistrationForm = () => {
//   const [email, setEmail] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [secondName, setSecondName] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [position, setPosition] = useState('');
//   const [isFormFilled, setIsFormFilled] = useState(false);
//   const [showWarningPage, setShowWarningPage] = useState(true);
//   const [isEmailValid, setIsEmailValid] = useState(true);


//   const updateFormState = () => {
//     const isFilled =
//       email.trim() !== '' &&
//       firstName.trim() !== '' &&
//       secondName.trim() !== '' &&
//       companyName.trim() !== '' &&
//       position.trim() !== '';
//     setIsFormFilled(isFilled);
//     setShowWarningPage(!isFilled);
//   };

//   const isEmailValidRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);

//     // Проверяем e-mail и обновляем isEmailValid
//     setIsEmailValid(isEmailValidRegex.test(newEmail));

//     updateFormState();
//   };


  
//   const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFirstName(e.target.value);
//     updateFormState();
//   };
  
//   const handleSecondNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSecondName(e.target.value);
//     updateFormState();
//   };
  
//   const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCompanyName(e.target.value);
//     updateFormState();
//   };
  
//   const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPosition(e.target.value);
//     updateFormState();
//   };


//   const handleSaveButtonClick = () => {
//     if (isFormFilled) {
//       // Здесь можно добавить логику отправки данных на сервер
//       // После успешной отправки можно изменить состояние showWarningPage
//       setShowWarningPage(false);
//       console.log('Данные успешно отправлены');
//     } else {
//       setShowWarningPage(true);
//       console.log('Данные не отправлены. Пожалуйста, заполните все поля.');
//     }
//   };


//   return (
//     <div>
//       {showWarningPage ? <WarningPageBlue /> : <WarningPageGreen />}

//       <form>
//         <InputBoxYellow
//           label="E-mail"
//           placeholder="ceo@digitaluniverse.com"
//           required
//           value={email}
//           onChange={handleEmailChange}
//           className={!isEmailValid ? 'InvalidInput' : ''}
//           isEmailValid={isEmailValid}
//         />
//          {!isEmailValid && <p className="error-message">Введіть коректну e-mail адресу</p>}
//         <InputBoxYellow
//           label="First Name"
//           placeholder="Enter Your First Name"
//           required
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//         <InputBoxYellow
//           label="Second Name"
//           placeholder="Enter Your Full Name"
//           required
//           value={secondName}
//           onChange={handleSecondNameChange}
//         />
//         <InputBoxYellow
//           label="Company Name"
//           placeholder="Enter Company Name"
//           required
//           value={companyName}
//           onChange={handleCompanyNameChange}
//         />
//         <InputBoxYellow
//           label="Position"
//           placeholder="Enter Your Position"
//           required
//           value={position}
//           onChange={handlePositionChange}
//           className="inputform"
//         />
//         <SaveButton
//           onClick={handleSaveButtonClick}
//         >
//           Зберегти
//         </SaveButton>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;



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
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isDataSubmitted] = useState(false);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);


  const isEmailValidRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(isEmailValidRegex.test(newEmail));
    setIsSaveButtonDisabled(!isEmailValidRegex.test(newEmail));
  };

  const handleSaveButtonClick = async () => {
     
    };
  return (
    <div>
      {isDataSubmitted ? <SuccessWarning />:<MissingDataWarning /> }
      <form>
        <InputBox
          label="E-mail"
          placeholder="ceo@digitaluniverse.com"
          required
          value={email}
          onChange={handleEmailChange}
          className={!isEmailValid ? 'InvalidInput' : ''}
        />
         {!isEmailValid && <p style={{color: 'red', fontSize: '12px', marginTop: '5px'}}>Введіть коректну e-mail адресу</p>}
         <InputBox
          label="First Name"
          placeholder="Enter Your First Name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputBox
          label="Second Name"
          placeholder="Enter Your Full Name"
          required
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
        <InputBox
          label="Company Name"
          placeholder="Enter Company Name"
          required
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <InputBox
          label="Position"
          placeholder="Enter Your Position"
          required
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="inputform"
        />
        <SaveButton onClick={handleSaveButtonClick} disabled={isSaveButtonDisabled}>Зберегти</SaveButton>
      </form>
    </div>
  );
};
