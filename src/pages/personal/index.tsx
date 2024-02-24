// import { PersonalNavbar } from "widget/Navbars";
// import { PageSwitcher } from "features/Pageswitcher";
import { SubNavbar } from "features/SubNavbar";
// import { PageContainer, PageHeader, PageInner } from "shared/ui/page-layout";
import { PersonalProjectList } from "entities/project/ui/PersonalProjectList";

// import MobileHeader from './MobileHeader/MobileHeader';

export const PersonalPage = () => {
  return (
    <>
      <SubNavbar
        sublinks={[
          { label: "Налаштування", url: "" },
          { label: "Сповіщення", url: "" },
          { label: "Проєкти", url: "/projects" },
          { label: "Команда", url: "/team" },
        ]}
      />
      <PersonalProjectList />
    </>
  );

  // return (
  //   <PageContainer>
  //     {/* <MobileHeader /> */}
  //     <PersonalNavbar />

  //     <PageInner>
  //       <PageSwitcher />
  //       <PageHeader>Проекти</PageHeader>
  //       <SubNavbar
  //         sublinks={[
  //           { label: "Налаштування", url: "" },
  //           { label: "Сповіщення", url: "" },
  //           { label: "Проєкти", url: "" },
  //           { label: "Команда", url: "" },
  //         ]}
  //       />
  //       <PersonalProjectList />
  //     </PageInner>
  //   </PageContainer>
  // );
};
