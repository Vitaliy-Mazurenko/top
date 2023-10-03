import styled from "styled-components";

export const PageInner = styled.div`
  flex-grow: 1;
  overflow: auto;
`
export const PageHeader = styled.h1`
  color: #1c1c1e;
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0.90px;
`;
export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  height: 100dvh;
  overflow: hidden;
  gap: 1.75rem;
`;

export const PageSwitcher = styled.div`
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

export const PageSwitch = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 25px;
`;

export const PageHelperBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 952px;
`;

export const PageInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
