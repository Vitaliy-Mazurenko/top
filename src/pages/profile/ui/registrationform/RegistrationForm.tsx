import {
  SaveButton,
} from './RegistrationFormStyles'
import InputBoxYellow from '../../../../shared/ui/reusable_input/InputBoxYellow';


const RegistrationForm = () => {
  
  return (
    <div className='registrationforms'>
     <form>
        <InputBoxYellow
          label="E-mail"
          placeholder="ceo@digitaluniverse.com"
          className='inputform'
          required
        />
        <InputBoxYellow
          label="First Name"
          placeholder="Enter Your First Name"
          required
          className='inputform'
        />
        <InputBoxYellow
          label="Second Name"
          placeholder="Enter Your Full Name"
          required
          className='inputform'
        />
        <InputBoxYellow
          label="Company Name"
          placeholder="Enter Company Name"
          required
          className='inputform'
        />
        <InputBoxYellow
          label="Position"
          placeholder="Enter Your Position"
          required
          className='inputform'
        />
        <SaveButton>Зберегти</SaveButton>
      </form>
    </div>
  );
};

export default RegistrationForm;
