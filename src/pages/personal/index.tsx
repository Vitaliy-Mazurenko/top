import { PersonalNavbar } from 'widget/Navbars';
import { PageSwitcher } from 'features/Pageswitcher';
import { SubNavbar } from 'features/SubNavbar';
import { PageContainer, PageHeader, PageInner } from 'shared/ui/page-layout';

import MobileHeader from './MobileHeader/MobileHeader';


export const PersonalPage = () => {

  return (
    <PageContainer>
      <MobileHeader />
      <PersonalNavbar />

      <PageInner>
        <PageSwitcher />
        <PageHeader>Проекти</PageHeader>
        <SubNavbar sublinks={[
          { label: 'Налаштування', url: '' },
          { label: 'Сповіщення', url: '' },
          { label: 'Проєкти', url: '' },
          { label: 'Команда', url: '' },
        ]} />
        {/* <PageInfo>

        </PageInfo> */}
      </PageInner >
    </PageContainer>
  );
};
