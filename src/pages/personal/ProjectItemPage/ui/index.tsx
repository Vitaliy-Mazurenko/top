import { /*useState,*/ FC  } from "react";
import { useParams } from 'react-router-dom';
import { SubNavbar } from "features/SubNavbar";
import { Container } from "shared/ui/Container";
import { PersonalProjectItemPage } from "entities/project/ui/PersonalProjectList/PersonalProjectItemPage";



export interface ChartItemInterface {
  id: number;
  percentage: number;
  title: string;
}


export const ProjectItemPage: FC = () => {
  const { id } = useParams();



  return (
    <>
        <Container>
          <SubNavbar
        sublinks={[
          { label: "Налаштування", url: "" },
          { label: "Сповіщення", url: "" },
          { label: "Проєкти", url: "" },
          { label: "Команда", url: "" },
        ]}
      />
          <PersonalProjectItemPage id={id}/>
        </Container>

    </>
  );
};
