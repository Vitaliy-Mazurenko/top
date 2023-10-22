import { /*useState,*/ FC  } from "react";
import { useParams } from 'react-router-dom';

import { Container } from "shared/ui/Container";



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
          Проект - {id}
          </Container>

    </>
  );
};
