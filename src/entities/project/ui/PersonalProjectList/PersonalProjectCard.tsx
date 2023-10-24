import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Title = styled.h6`
  ${({ theme }) => theme.typography["Heading-6"]};
  margin-top: 0.5rem;
  text-align: center;
  /* &::before {
    content: " ";
    width: 1rem;
    height: 1px;
    background-color: rgba(31, 36, 40, 0.5);
  } */
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

interface IProject {
  id: number;
  title: string;
  body: string;
  avatarURL?: string;
  status: "Пошук PM" | "Haбip команди" | "В розробці" | "Завершено";
}
export interface PersonalProjectCardProps {
  id: number;
  title: string;
  body: string;
  avatarURL?: string;
  status: "Пошук PM" | "Haбip команди" | "В розробці" | "Завершено";
  slotStatus?: React.ReactNode;
  filter?(arg0: (project: IProject) => boolean): import("react").ReactNode;
}

export const PersonalProjectCard = (props: PersonalProjectCardProps) => {
  const { id, title, body, avatarURL, slotStatus } = props;

  return (
    <Wrapper>
      <Link to={`${id}`}>
        <CardContainer>
          <Avatar src={avatarURL} />
          <Title>{title}</Title>
          <Body>{body}</Body>
          {slotStatus}
        </CardContainer>
      </Link>
    </Wrapper>
  );
};
