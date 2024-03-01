import styled from "styled-components";
import teamPhoto from "shared/assets/img/teamPhoto.png";
import teamPhoto1 from "shared/assets/img/teamPhoto1.png";
import teamPhoto2 from "shared/assets/img/teamPhoto2.png";
import teamPhoto3 from "shared/assets/img/teamPhoto3.png";
import teamPhoto4 from "shared/assets/img/teamPhoto4.png";
import teamPhoto5 from "shared/assets/img/teamPhoto5.png";
import teamPhoto6 from "shared/assets/img/teamPhoto6.png";
import teamPhoto7 from "shared/assets/img/teamPhoto7.png";
import teamPhoto8 from "shared/assets/img/teamPhoto8.png";
import teamPhoto9 from "shared/assets/img/teamPhoto9.png";
import teamPhoto10 from "shared/assets/img/teamPhoto10.png";
import teamPhoto11 from "shared/assets/img/teamPhoto11.png";

const WrapperTeams = styled.div`
  background-color: #fff;
  font-family: 'Raleway',sans-serif;
  margin: 0px 24px 40px;
`;

const TeamTitle = styled.h2`
  display: flex;
  justify-content: center;
  color: #FF8C33;
  font-size: 32px;
  font-weight: 600;
  padding: 9px 0 14px;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%; 
`;
const UserWrapper= styled.div`
  padding: 0 5px;
  & img {
    margin: 0 25px;
    width: 48px;
    height: 48px;
  }
`;
const UserTitle = styled.h5`
  display: flex;
  justify-content: center;
  color: #333333;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 0 4px;
`;
const UserSubTitle = styled.h6`
  display: flex;
  justify-content: center;
  color: #333333;
  font-size: 10px;
  font-weight: 500;
  padding: 0px 0 14px;
`;

export const PersonalTeams = () => {
  

 

  return (
    <>
    <WrapperTeams>
      <TeamTitle>Команда</TeamTitle>
      <Content>
    <UserWrapper>
      <img src={teamPhoto} alt="arrowImg" />
      <UserTitle>Kathryn Murphy</UserTitle>
      <UserSubTitle>Project Manager</UserSubTitle>
    </UserWrapper>
    <UserWrapper>
      <img src={teamPhoto1} alt="arrowImg" />
      <UserTitle>Esther Howard</UserTitle>
      <UserSubTitle>UI/UX Designer</UserSubTitle>
    </UserWrapper>
    <UserWrapper>
      <img src={teamPhoto2} alt="arrowImg" />
      <UserTitle>Cody Fisher</UserTitle>
      <UserSubTitle>UI/UX Designer</UserSubTitle>
    </UserWrapper>
    <UserWrapper>
      <img src={teamPhoto3} alt="arrowImg" />
      <UserTitle>Dianne Russell</UserTitle>
      <UserSubTitle>Front-End</UserSubTitle>
    </UserWrapper>
    <UserWrapper>
      <img src={teamPhoto4} alt="arrowImg" />
      <UserTitle>Courtney Henry</UserTitle>
      <UserSubTitle>Front-End</UserSubTitle>
    </UserWrapper>
    <UserWrapper>
      <img src={teamPhoto5} alt="arrowImg" />
      <UserTitle>Jacob Jones</UserTitle>
      <UserSubTitle>Front-End</UserSubTitle>
    </UserWrapper>
    <UserWrapper>
      <img src={teamPhoto6} alt="arrowImg" />
      <UserTitle>Jenny Wilson</UserTitle>
      <UserSubTitle>Back-End</UserSubTitle>
    </UserWrapper>
    <UserWrapper>
      <img src={teamPhoto7} alt="arrowImg" />
      <UserTitle>Jane Cooper</UserTitle>
      <UserSubTitle>Back-End</UserSubTitle>
    </UserWrapper>
    <UserWrapper>
      <img src={teamPhoto8} alt="arrowImg" />
      <UserTitle>Brooklyn Simmons</UserTitle>
      <UserSubTitle>QA</UserSubTitle>
    </UserWrapper>
    <UserWrapper>
      <img src={teamPhoto9} alt="arrowImg" />
      <UserTitle>Robert Fox</UserTitle>
      <UserSubTitle>QA</UserSubTitle>
    </UserWrapper>
    <UserWrapper>
      <img src={teamPhoto10} alt="arrowImg" />
      <UserTitle>Leslie Alexander</UserTitle>
      <UserSubTitle>QA</UserSubTitle>
    </UserWrapper>
    <UserWrapper>
      <img src={teamPhoto11} alt="arrowImg" />
      <UserTitle>Darlene Robertson</UserTitle>
      <UserSubTitle>QA</UserSubTitle>
    </UserWrapper>
    </Content>
    </WrapperTeams>
    </>
  );
};
