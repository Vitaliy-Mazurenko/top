import styled from "styled-components";

export const NotificationWrapper = styled.div`
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
  background-color: #df2209;
  color: white;
  font-size: 10px;
  line-height: 1.57;
`;
