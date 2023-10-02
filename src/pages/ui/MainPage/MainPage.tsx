import {
  MainPageContainer,
  MainPageInfo,
  MainPageHeader,
} from './MainPageStyles';
import { Navbar } from '../Navbar';
import { PagePath } from '../pageswitcher/PageSwitcher';
import { NavbarMainPage } from '../navlink/NavbarMainPage';
import RegistrationPage from '../registrationform/RegistrationPage';
import ModalUploadForm from 'pages/profile/ui/ModalUploadWindow/ModalUploadForm';


export const ProfileSettingsPage = () => {

  return (
    <MainPageContainer>
      <Navbar />

      <div style={{ marginLeft: '22px' }}>
        <PagePath />
        <MainPageHeader>Профіль</MainPageHeader>
        <NavbarMainPage sublinks={[
          { label: 'Налаштування', url: '' },
          { label: 'Сповіщення', url: '' },
          { label: 'Проєкти', url: '' },
          { label: 'Команда', url: '' },
        ]} />
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
