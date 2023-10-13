import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageSwitcherContainer = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 480px) {
    margin-left: 16px;
  }
`;

export const ExtraText = styled.span`
  color: black;
`;

export const ActiveLink = styled(Link)`
  color: #636366;
  font-size: 12px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.36px;
  cursor: pointer;
`;

export const PageSwitchLink = styled(Link)`
  cursor: pointer;
  color: #d6d6d6;
  font-size: 12px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.36px;
  text-align: center;
`;

export const PageSwitchMain = styled.p`
  /* margin-left: 25px; */
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
