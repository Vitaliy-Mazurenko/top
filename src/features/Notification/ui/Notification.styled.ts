import styled from "styled-components";

export const NotificationWrapper = styled.div`
  position: relative;
  display: block;
  cursor: pointer;
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: -3px;
  left: 50%;
  padding: 0 7px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 110px;
  background-color: #df2209;
  color: white;
  font-size: 10px;
  line-height: 1.57;
`;
