import styled from "styled-components";
// import { Link } from "react-router-dom";
import { mockPersonalProjectList } from "../../mock/mockPersonalProjectList";
// import { FC } from "react";
import { StyledPersonalProjectItem } from "./PersonalCard.styled";

const Wrapper = styled.div`
  background-color: #F4F9FB;
    height: 256px;
    width: 472px;
`;

/*
const Title = styled.h6`
  ${({ theme }) => theme.typography["Heading-6"]};
  margin-top: 0.5rem;
  text-align: center;

`;

const Body = styled.p`
  margin-left: 0.1rem;
  margin-top: 0.5rem;
  line-height: 0.9875rem;
  font-size: 0.8rem;
  text-align: center;
  width: 99%;
`;

const Avatar = styled.img`
  width: 144px; // 272px;
  height: 144px;
  object-fit: cover;
  margin: 0 auto;
  display: flex;
`;
*/
export interface PersonalProjectIdProps {
  id?: number | string | undefined;
}

export interface IProjects {
  id: number;
  title: string;
  body: string;
  avatarURL?: string;
  status: "Пошук PM" | "Haбip команди" | "В розробці" | "Завершено";
  slotStatus?: React.ReactNode;
  // filter?(arg0: (project: IProject) => boolean): import("react").ReactNode;
}

export const PersonalProjectItemPage = (props: PersonalProjectIdProps) => {
  const { id  } = props;
  const projectsId = mockPersonalProjectList;

  const projectFind = projectsId.filter(
    (project) => (project.id == id)
  );


  return (
    <Wrapper>
        
        <StyledPersonalProjectItem
          // key={index}
          {...projectFind[0]}
        />

    </Wrapper>
  );
};
