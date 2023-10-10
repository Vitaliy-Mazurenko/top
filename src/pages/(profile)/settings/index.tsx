import { EmployeeNavbar } from 'widget/Navbars';
import { PageSwitcher } from 'features/Pageswitcher';
import { SubNavbar } from 'features/SubNavbar';
import { PageContainer, PageHeader, PageInfo, PageInner } from 'shared/ui/page-layout';
import { ModalUploadForm } from './ui/ModalUploadWindow/ModalUploadForm';
import { UpdateProfileForm } from 'features/update-profile';
import MobileHeader from './MobileHeader/MobileHeader';


export const ProfileSettingsPage = () => {

  return (
    <PageContainer>
      <MobileHeader />
      <EmployeeNavbar />

      <PageInner>
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
              <UpdateProfileForm />
            </div>
          </div>
          <ModalUploadForm />
        </PageInfo>
      </PageInner >
    </PageContainer>
  );
};
