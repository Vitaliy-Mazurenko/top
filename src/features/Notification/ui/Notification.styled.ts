import styled from "styled-components";

export const NotificationWrapper = styled.button`
  position: relative;
  display: block;
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: -2px;
  right: -11px;

  width: 19px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 110px;
  background-color: #ff8c33;
  color: white;
  font-size: 12px;
  line-height: 1.57;
`;
