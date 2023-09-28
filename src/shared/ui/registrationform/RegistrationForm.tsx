import React, { useState } from 'react';
import './registration.css'

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
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
    {/* <form onSubmit={handleSubmit}> */}
    <form>
      <div className='input-box'>
        <label>E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='ceo@digitaluniverse.com'
          required
          className='inputform'
        />
      </div>
      <div className='input-box'>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='Enter Your Full Name'
          required
          className='inputform'
        />
      </div>
      <div className='input-box'>
        <label>Second Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Enter Your Full Name'
          required
          className='inputform'
        />
      </div>
      <div className='input-box'>
        <label>Company Name</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder='Enter Company Name'
          required
          className='inputform'
        />
      </div>
      <div className='input-box'>
        <label>Position</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder='Enter Your Position'
          required
          className='inputform'
        />
      </div>
      <button type="submit" className='userdatabtn'>Зберегти</button>
    </form>
    </div>
  );
};

export default RegistrationForm;
