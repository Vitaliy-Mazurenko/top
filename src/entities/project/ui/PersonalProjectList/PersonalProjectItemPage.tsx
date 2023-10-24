import styled from "styled-components";
// import { Link } from "react-router-dom";
import { mockPersonalProjectList } from "../../mock/mockPersonalProjectList";
// import { FC } from "react";
import { StyledPersonalProjectCard } from "./PersonalCard.styled";

const Wrapper = styled.div`
  background-color: #fff;
`;

export const CardContainer = styled.div`
  position: relative;
  box-shadow: 0px 3px 4px 0px rgba(51, 51, 51, 0.2);
  color: #333;
  padding: 0.25rem 0;
  height: 256px;
  width: 272px;
  display: flex;
  flex-direction: column;
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

export const PersonalProjectItemPage = (props: PersonalProjectIdProps) => {
  const { id  } = props;
  const projectsId = mockPersonalProjectList;



  return (
    <Wrapper>

        <CardContainer>
        Проект Item - {id}
          {/* <Avatar src={avatarURL} />
          <Title>{title}</Title>
          <Body>{body}</Body> */}
                {projectsId.map((project, index) => (
        <StyledPersonalProjectCard
          key={index}
          {...project}

        />
      ))}

        </CardContainer>

    </Wrapper>
  );
};
