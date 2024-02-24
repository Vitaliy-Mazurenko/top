import { useMemo, useState } from "react";
import { StyledPersonalProjectCard, Status, StyledPagination } from "./PersonalCard.styled";
import { WrapperCards, WrapperContent } from "./Wrapper.styled";
import { mockPersonalProjectList } from "../../mock/mockPersonalProjectList";
import { getPersonalProjectStatuses } from "../../helpers/getPersonalProjectStatuses";

interface IStatuses {
  [index: string]: {
    color?: string;
    backgroundColor?: string;
    borderColor?: string
  };
}

export const PersonalProjectList = () => {
  const projectStatuses: IStatuses = useMemo(getPersonalProjectStatuses, []);
  const projectsToShow = mockPersonalProjectList;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [projectsPerPage] = useState<number>(12);
  const lastProjectIndex = currentPage * projectsPerPage;
  const firstProjectIndex = lastProjectIndex - projectsPerPage;
  const currentProject = projectsToShow.slice(firstProjectIndex, lastProjectIndex);

  const paginate = (pageNumbers:number) => setCurrentPage(pageNumbers);

  const lastPage = Math.ceil(projectsToShow.length / projectsPerPage);
  const arrOfPages: (number)[] = [];
  for(let i = 1; i <= lastPage; i++){
    arrOfPages.push(i);
  }


  return (
    <WrapperContent>
      <WrapperCards>
      {currentProject.map((project, index) => (
        <StyledPersonalProjectCard
          key={index}
          {...project}
          slotStatus={
            <Status
              $textColor={projectStatuses[project.status].color} // нам нужно обратится в объект projectStatuses и добратся до нужного цвета текста. Залезаем в объект, указываем ключ в квадратных скобках. Далее обращаемся к полю color. Аналогично делаем с пропсом $backgroundColor
              $backgroundColor={projectStatuses[project.status].backgroundColor}
              $borderColor={projectStatuses[project.status].color}
            >
              {project.status}
            </Status>
          }
        />
      ))}
      </WrapperCards>
    <StyledPagination
       arrOfPages={arrOfPages}
       lastPage={lastPage}
       currentPage={currentPage}
       paginate={paginate}
       />
    </WrapperContent>
  );
};
