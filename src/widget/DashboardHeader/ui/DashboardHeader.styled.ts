import styled from "styled-components";

import { Notification } from "features/Notification";
import { UserCredentials } from "features/UserCredentials";
import { DropdownButton } from "features/DropdownButton";

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 2;
  width: 100%;
  background-color: #f4f9fb;

  @media screen and (min-width: 1080px) {
    position: static;
    margin-bottom: 40px;
    padding: 20px 0;
    background-color: transparent;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1080px) {
    justify-content: flex-end;
  }
`;

export const DesktopContent = styled.div`
  display: none;

  @media screen and (min-width: 1080px) {
    display: block;
  }
`;

export const MobileContent = styled.div`
  display: block;

  @media screen and (min-width: 1080px) {
    display: none;
  }
`;

export const StyledNotification = styled(Notification)`
  margin-right: 1.5rem;
`;

export const StyledUserCredentials = styled(UserCredentials)`
  margin-right: 1.25rem;
`;

export const StyledDropdownButton = styled(DropdownButton)`
  margin-left: 0.625rem;
`;

export const StyledLogo = styled.img`
  display: block;
  padding: 0.25rem 0;

  @media screen and (min-width: 768px) {
    padding: 1rem 1rem 1rem 0;
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ControlButton = styled.button`
  padding: 0.5rem;
`;
