import RegistrationForm from './RegistrationForm';
import { SaveButton } from './RegistrationFormStyles';

const RegistrationPage = ({ onSave }: { onSave: () => void }) => {

  return (

    <div>
      <RegistrationForm />
      <SaveButton onClick={onSave}>Зберегти</SaveButton>
    </div>
  );
};

export default RegistrationPage;
