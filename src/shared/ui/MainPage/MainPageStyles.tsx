import styled from 'styled-components';

export const MainPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const MainPageSwitcher = styled.div`
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.36px;
  color: #d6d6d6;
`;

export const ActiveLink = styled.div`
  color: red;
  font-weight: bold;
`;

export const Second = styled.div`
  margin-left: 10px;
`;

export const MainPageSwitch = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 25px;
`;

export const MainPageHelperBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 952px;
`;

export const MainPageInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainPageHeader = styled.h1`
  color: #1c1c1e;
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0.90px;
  margin-left: 28px;
`;

export const WarningTable = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #8054e3;
  margin-top: 40px;
  margin-left: 25px;
  gap: 16px;
  width: 400px;
  height: 56px;
  padding: 16px;
`;

export const WarningTableImage = styled.img`
  height: 24px;
  padding-left: 16px;
`;

export const WarningTableText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 2px;
`;
