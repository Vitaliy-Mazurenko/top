import RegistrationForm from "./RegistrationForm";

const RegistrationPage = ({ onSave }: { onSave: () => void }) => {

  return (

    <div>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
