import RegistrationPage from '../../ui/registrationform/RegistrationPage';
import { Navbar } from 'widget/Navbar';
import { PageSwitcher } from 'features/Pageswitcher';
import { SubNavbar } from 'features/SubNavbar';
import { PageContainer, PageHeader, PageInfo } from 'shared/ui/page-layout';
import { ModalUploadForm } from './ui/ModalUploadWindow/ModalUploadForm';


export const ProfileSettingsPage = () => {

  return (
    <PageContainer>
      <Navbar />
      <div style={{ marginLeft: '22px', flexGrow: '1'}}>
        <PageSwitcher />
        <PageHeader>Профіль</PageHeader>
        <SubNavbar sublinks={[
          { label: 'Налаштування', url: '' },
          { label: 'Сповіщення', url: '' },
          { label: 'Проєкти', url: '' },
          { label: 'Команда', url: '' },
        ]} />
        <PageInfo>
          <div>
            <div>
              <RegistrationPage />
            </div>
          </div>
          <ModalUploadForm />
        </PageInfo>
      </div>
    </PageContainer>
  );
};
