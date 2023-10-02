
import {
  MainPageContainer,
  MainPageInfo,
  MainPageHeader,


} from './MainPageStyles';

import SidebarMenu from '../Sidebarmenu/SidebarMenu';
import NavbarMainPage from '../NavbarMainPage/NavbarMainPage';
import RegistrationPage from '../Registrationform/RegistrationPage';
import PageSwitcher from '../PageSwitcher/PageSwitcher';
import ModalUploadForm from '../ModalUploadWindow/ModalUploadForm';


const MainPage = () => {


  return (
    <MainPageContainer>
      <SidebarMenu />

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
          <ModalUploadForm />
        </MainPageInfo>
      </div>
    </MainPageContainer>
  );
};

export default MainPage;