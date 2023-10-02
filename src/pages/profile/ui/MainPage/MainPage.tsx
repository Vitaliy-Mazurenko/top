
import {
  MainPageContainer,
  MainPageInfo,
  MainPageHeader,


} from './MainPageStyles';


import NavbarMainPage from '../NavbarMainPage/NavbarMainPage';


import ModalUploadForm from '../ModalUploadWindow/ModalUploadForm';
import PageSwitcher from '../pageswitcher/PageSwitcher';
import RegistrationPage from '../Registrationform/RegistrationPage';
import SidebarMenu from '../SidebarMenu/SidebarMenu';


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