// import warningImg from './../../assets/img/warningcircle.png'
// import './MainPage.css'
// import Navbar from '../navbar/Navbar'
// import NavbarMainPage from '../navlink/NavbarMainPage';
// import RegistrationPage from '../registrationform/RegistrationPage';
// import PageSwitcher from '../pageswitcher/PageSwitcher'
// import ModalForm from '../modal/modalform';


// const MainPage = () => {


  
//   return (

//     <div className='mainPage'>
//       <Navbar />
    
//         <div className='mainpageContent'>
//         <PageSwitcher />
//           <h1 className='mainpageheader'>Профіль</h1>
//           <NavbarMainPage />
//           <div className='mainpageinfo'>
//           <div className='userinfo'>
//             <div className='userdata'>
//                 <div className='warningtable'>
//                   <img src={warningImg}/>
//                   <p>To continue work add the missing data</p>
//                 </div>
//                 <RegistrationPage />
//             </div>
//           </div>
//           <ModalForm />
//         </div>  
          
//           </div>
          
        
//     </div>
    
    
//   )
// }

// export default MainPage;



import React from 'react';
import {
  MainPageContainer,
  MainPageSwitcher,
  ActiveLink,
  Second,
  MainPageSwitch,
  MainPageHelperBar,
  MainPageInfo,
  MainPageHeader,
  WarningTable,
  WarningTableImage,
  WarningTableText,
} from './MainPageStyles';

import warningImg from './../../assets/img/warningcircle.png';
import Navbar from '../navbar/Navbar';
import NavbarMainPage from '../navlink/NavbarMainPage';
import RegistrationPage from '../registrationform/RegistrationPage';
import PageSwitcher from '../pageswitcher/PageSwitcher';
import ModalForm from '../modal/modalform';

const MainPage = () => {
  return (
    <MainPageContainer className='mainPage'>
      <Navbar />

      <div className='mainpageContent'>
        <PageSwitcher />
        <MainPageHeader className='mainpageheader'>Профіль</MainPageHeader>
        <NavbarMainPage />
        <MainPageInfo className='mainpageinfo'>
          <div className='userinfo'>
            <div className='userdata'>
              <WarningTable className='warningtable'>
                <WarningTableImage src={warningImg} />
                <WarningTableText>
                  To continue work add the missing data
                </WarningTableText>
              </WarningTable>
              <RegistrationPage />
            </div>
          </div>
          <ModalForm />
        </MainPageInfo>
      </div>
    </MainPageContainer>
  );
};

export default MainPage;
