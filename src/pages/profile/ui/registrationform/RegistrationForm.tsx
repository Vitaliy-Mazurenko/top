// import InputBoxYellow from 'shared/ui/reusable_input/InputBoxYellow';


// const RegistrationForm = () => {
  
//   return (
//     <div >
//      <form>
//         <InputBoxYellow
//           label="E-mail"
//           placeholder="ceo@digitaluniverse.com"
//           required
//         />
//         <InputBoxYellow
//           label="First Name"
//           placeholder="Enter Your First Name"
//           required
          
//         />
//         <InputBoxYellow
//           label="Second Name"
//           placeholder="Enter Your Full Name"
//           required
         
//         />
//         <InputBoxYellow
//           label="Company Name"
//           placeholder="Enter Company Name"
//           required
        
//         />
//         <InputBoxYellow
//           label="Position"
//           placeholder="Enter Your Position"
//           required
//           className='inputform'
//         />
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;



import React, { useState } from 'react';
import InputBoxYellow from 'shared/ui/reusable_input/InputBoxYellow';
import { SaveButton } from './RegistrationFormStyles';
import WarningPageGreen from 'shared/ui/ReusableWarningTableGreen/WarningPageGreen';
import WarningPageBlue from 'shared/ui/ReusableWarningTableBlue/WarningPageBlue';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [showWarningPage, setShowWarningPage] = useState(true);

  // Функция для обновления состояния формы
  const updateFormState = () => {
    // Проверяем, заполнены ли все обязательные поля
    const isFilled =
      email.trim() !== '' &&
      firstName.trim() !== '' &&
      secondName.trim() !== '' &&
      companyName.trim() !== '' &&
      position.trim() !== '';
    setIsFormFilled(isFilled);
    setShowWarningPage(!isFilled);
  };

  // Обработчики изменения значений инпутов
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
  };


  return (
    <div>
      {showWarningPage ? <WarningPageBlue /> : <WarningPageGreen />}

      <form>
        <InputBoxYellow
          label="E-mail"
          placeholder="ceo@digitaluniverse.com"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <InputBoxYellow
          label="First Name"
          placeholder="Enter Your First Name"
          required
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <InputBoxYellow
          label="Second Name"
          placeholder="Enter Your Full Name"
          required
          value={secondName}
          onChange={handleSecondNameChange}
        />
        <InputBoxYellow
          label="Company Name"
          placeholder="Enter Company Name"
          required
          value={companyName}
          onChange={handleCompanyNameChange}
        />
        <InputBoxYellow
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

export default RegistrationForm;
