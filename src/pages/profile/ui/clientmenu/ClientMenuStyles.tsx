import styled from 'styled-components';

export const ClientName = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-top: 22px;
  margin-bottom: 22px;
  margin-left: 8px;
`;

export const ClientMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-right: 20px;
`;

export const Cursor = styled.a`
  cursor: pointer;
  margin-top: 20px;
`;

export const ClientImage = styled.img`
  width: 32px;
  height: 32px;
  margin-top: 18px;
  margin-left: 24px;
`;

export const SmallLogo = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Notification = styled.div`
  margin-left: 8px;
  position: relative;
`;

export const NotificationBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 16px;
  background-color: #FF8C33;
  color: white;
  border-radius: 50%;
  width: 11px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0px;
  cursor: pointer;
`;


