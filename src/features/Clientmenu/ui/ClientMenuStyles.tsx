import styled from "styled-components";


export const ClientName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  margin-top: 1.375rem;
  margin-bottom: 1.375rem;
  margin-left: 0.5rem;
`;

export const ClientMenuContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

export const QuestionButton = styled.button`
  flex-direction: row;
  gap: 0.5rem;
  margin-right: 1.25rem;
`;

export const Cursor = styled.a`
  cursor: pointer;
  margin-top: 1.25rem;
`;

export const ClientImage = styled.img`
  width: 2rem;
  height: 2rem;
  margin-top: 1.125rem;
  margin-left: 1.5rem;
`;

export const SmallLogo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const Notification = styled.div`
  margin-left: 0.5rem;
  position: relative;
`;

export const NotificationBadge = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1rem;
  background-color: #FF8C33;
  color: white;
  border-radius: 50%;
  width: 0.6875rem; 
  height: 0.75rem;
  justify-content: center;
  align-items: center;
  font-size: 0px;
  cursor: pointer;
 
`;
