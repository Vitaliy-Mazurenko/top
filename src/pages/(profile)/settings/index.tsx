import { PageContainer } from 'shared/ui/page-layout/PageContainer/index.styled';
import RegistrationPage from '../../ui/registrationform/RegistrationPage';
import { ModalUploadForm } from 'pages/profile/ui/ModalUploadWindow/ModalUploadForm';
import { Navbar } from 'widget/Navbar';
import { PageSwitcher } from 'features/Pageswitcher';
import { SubNavbar } from 'features/SubNavbar';
import { PageHeader } from 'shared/ui/page-layout/PageHeader/index.styled';


export const ProfileSettingsPage = () => {

  return (
    <PageContainer>
      <Navbar />
      <div style={{ marginLeft: '22px' }}>
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
