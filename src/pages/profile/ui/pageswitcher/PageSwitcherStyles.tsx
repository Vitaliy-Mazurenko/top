import styled from 'styled-components';

export const PageSwitcherContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85vw;
`;


export const ExtraText = styled.span`
  color: #fff;
`;

export const ActiveLink = styled.a`
  
`;

export const PageSwitchLink = styled.a`
  cursor: pointer;
  color: #d6d6d6;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.36px;
  text-align: center;
  &:active {
    color: #636366;
    font-size: 12px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.36px;
    cursor: pointer;
  }
  
`;

export const PageSwitchMain = styled.p `
    margin-left: 25px;
    margin-top: 22px;
`;