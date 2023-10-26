import styled from "styled-components";
// import { Link } from "react-router-dom";
import { mockPersonalProjectList } from "../../mock/mockPersonalProjectList";
// import { FC } from "react";
import { Status } from "./PersonalCard.styled";
// import { StyledPersonalProjectItem } from "./PersonalCard.styled";

const Wrapper = styled.div`
  background-color: #F4F9FB;
  font-family: 'Raleway',sans-serif;
  height: calc(100vh - 240px);
  width: 100%;
  margin-top: 30px;
  display: flex;
  padding: 14px 24px;
`;

const Content = styled.div`
  margin-left: 43px;
  width: 100%; 
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Avatar = styled.img`
  width: 352px; // 272px;
  height: 352px;
  object-fit: cover;
  margin: 10px 5px;
  display: flex;
`;

const Title = styled.h6`
  margin-top: 0.2rem;
  color: #FF8C33;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Subtitle = styled.p`
color: #333;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
width: 99%;
`;

const StatusItem = styled(Status)`
margin-left: auto;
  
`
const Description = styled.p`
color: #333;
font-family: Raleway;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 130%;
margin-top: 20px;
`;

const BtnItem = styled.span`
display: flex;
width: 208px;
padding: 8px 24px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 2px;
background: #FF8C33;
color: #FFFFFF;
margin-top: 30px;
cursor: pointer;
`;

export interface PersonalProjectIdProps {
  id?: number | string | undefined;
}

export interface IProjects {
  id: number | string;
  title: string;
  body: string;
  avatarURL?: string;
  status: "Пошук PM" | "Haбip команди" | "В розробці" | "Завершено";
  slotStatus?: React.ReactNode;
  description?: string;
  btnItem?: string;
}

export const PersonalProjectItemPage = (props: PersonalProjectIdProps) => {
  const { id  } = props;
  const projectsId = mockPersonalProjectList;

  const projectFind = projectsId.find(
    (project) => (project.id == id)
  );


  return (
    <Wrapper>     
      <Avatar src={projectFind?.avatarURL} />
      <Content>
        <HeaderContent>
          <Title>
            {projectFind?.title}
          </Title>
          <StatusItem>{projectFind?.status}</StatusItem>
        </HeaderContent>
        <Subtitle>
          {projectFind?.body}
        </Subtitle>
        <Description>
          {projectFind?.description}
        </Description>
        {projectFind?.btnItem && <BtnItem>{projectFind?.btnItem}</BtnItem>}       
      </Content>
        


    </Wrapper>
  );
};
