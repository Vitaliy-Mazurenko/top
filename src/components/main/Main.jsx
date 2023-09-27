import React, { useState } from 'react';
import warningImg from './../../assets/img/warningcircle.png'
import './main.css'
import Navbar from '../navbar/Navbar'
import NavbarMainPage from '../navlink/NavbarMainPage';
import RegistrationPage from '../registrationform/RegistrationPage';
import PageSwitcher from '../pageswitcher/PageSwitcher'
import ModalForm from '../modal/modalform';


const Main = () => {
  const activeLink = "mainpageswitcher mainpage--active"
  const normalLink = "mainpageswitcher"
  
  return (

    <div className='mainPage'>
      <Navbar />
    
        <div className='mainpageContent'>
        <PageSwitcher />
          <h1 className='mainpageheader'>Профіль</h1>
          <NavbarMainPage />
          <div className='mainpageinfo'>
          <div className='userinfo'>
            <div className='userdata'>
                <div className='warningtable'>
                  <img src={warningImg}/>
                  <p>To continue work add the missing data</p>
                </div>
                <RegistrationPage />
            </div>
          </div>
          <ModalForm />
        </div>  
          
          </div>
          
        
    </div>
    
    
  )
}

export default Main;