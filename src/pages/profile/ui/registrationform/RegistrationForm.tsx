import InputBoxYellow from 'shared/ui/reusable_input/InputBoxYellow';


const RegistrationForm = () => {
  
  return (
    <div >
     <form>
        <InputBoxYellow
          label="E-mail"
          placeholder="ceo@digitaluniverse.com"
          required
        />
        <InputBoxYellow
          label="First Name"
          placeholder="Enter Your First Name"
          required
          
        />
        <InputBoxYellow
          label="Second Name"
          placeholder="Enter Your Full Name"
          required
         
        />
        <InputBoxYellow
          label="Company Name"
          placeholder="Enter Company Name"
          required
        
        />
        <InputBoxYellow
          label="Position"
          placeholder="Enter Your Position"
          required
          className='inputform'
        />
      </form>
    </div>
  );
};

export default RegistrationForm;
