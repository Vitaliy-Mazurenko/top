import styled from "styled-components";
import { useMemo } from "react";
import { mockPersonalProjectList } from "../../mock/mockPersonalProjectList";
import { Status } from "./PersonalCard.styled";
import { PersonalTeams } from "./PersonalTeams";
// import { StyledPersonalProjectItem } from "./PersonalCard.styled";
import { getPersonalProjectStatuses } from "../../helpers/getPersonalProjectStatuses";

const BackgroundWrap = styled.div`
  background-color: #F4F9FB;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  background-color: #F4F9FB;
  font-family: 'Raleway',sans-serif;
  height: calc(100vh - 310px);
  width: 100%;
  margin-top: 10px;
  display: flex;
  padding: 14px 24px 0px;
`;

const Content = styled.div`
  margin-left: 43px;
  width: 100%; 
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
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
  @media (max-width: 1080px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
color: #333;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
width: 99%;
`;

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
margin-top: 20px;
cursor: pointer;
`;

interface PersonalProjectIdProps {
  id: number | string | undefined;
}

interface IProject {
  id: number | string;
  title: string;
  body: string;
  avatarURL?: string;
  status: "Пошук PM" | "Haбip команди" | "В розробці" | "Завершено";
  description: string;
  btnItem?: string;
}

export const PersonalProjectItemPage = (props: PersonalProjectIdProps) => {
  const projectStatuses = useMemo(getPersonalProjectStatuses, []);

  const { id } = props;
  const projectsId: IProject[] = mockPersonalProjectList;

  const projectFind = projectsId.find(
    (project) => (project.id == id)
  );


  return (
    <BackgroundWrap>
    <Wrapper>     
      <Avatar src={projectFind?.avatarURL} />
      <Content>
        <HeaderContent>
          <Title>
            {projectFind?.title}
          </Title>
          <Status
              $textColor={projectStatuses[projectFind!.status].color} // нам нужно обратится в объект projectStatuses и добратся до нужного цвета текста. Залезаем в объект, указываем ключ в квадратных скобках. Далее обращаемся к полю color. Аналогично делаем с пропсом $backgroundColor
              $backgroundColor={projectStatuses[projectFind!.status].backgroundColor}
              $borderColor={projectStatuses[projectFind!.status].color}
            >
              {projectFind?.status}
            </Status>
        </HeaderContent>
        <Subtitle>
          {projectFind?.body}
        </Subtitle>
        <Description>
          {projectFind?.description}
        </Description>
        {projectFind?.btnItem && <BtnItem>{projectFind.btnItem}</BtnItem>}       
      </Content>          

    </Wrapper>
    <PersonalTeams/>
    </BackgroundWrap>
    
  );
};
