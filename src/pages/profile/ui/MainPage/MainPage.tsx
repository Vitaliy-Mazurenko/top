
import {
  MainPageContainer,
  MainPageInfo,
  MainPageHeader,


} from './MainPageStyles';

import Navbar from '../navbar/Navbar';
import NavbarMainPage from '../navlink/NavbarMainPage';
import RegistrationPage from '../registrationform/RegistrationPage';
import PageSwitcher from '../pageswitcher/PageSwitcher';
import ModalForm from '../modal/modalform';


const MainPage = () => {


  return (
    <MainPageContainer>
      <Navbar />

      <div>
        <PageSwitcher />
        <MainPageHeader>Профіль</MainPageHeader>
        <NavbarMainPage />
        <MainPageInfo> 
          <div>
          <div>
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