import './registration.css'
import InputBoxYellow from '../reusable input/inputBoxYellow';

const RegistrationForm = () => {
  // const [email, setEmail] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [companyName, setCompanyName] = useState('');
  // const [position, setPosition] = useState('');
  // const handleSubmit = () => {
  //   e.preventDefault();
  //   const userData = {
  //     email,
  //     firstName,
  //     lastName,
  //     companyName,
  //     position,
  //   };

  //   onSave(userData);
  // };

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
        <button type="submit" className='userdatabtn'>Зберегти</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
