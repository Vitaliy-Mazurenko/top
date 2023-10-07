import styled from "styled-components";

import { Notification } from "features/Notification";
import { UserCredentials } from "features/UserCredentials";
import { DropdownButton } from "features/DropdownButton";

import { UkrainianFlag } from "shared/ui/CustomSVG/UkrainianFlag";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 29px;
  background-color: #f4f9fb;

  @media screen and (min-width: 1080px) {
    justify-content: flex-end;
    margin-bottom: 40px;
    padding: 20px 0;
    background-color: transparent;
  }
`;

export const StyledNotification = styled(Notification)`
  display: none;
  margin-right: 1.5rem;

  @media screen and (min-width: 1080px) {
    display: block;
  }
`;

export const StyledUserCredentials = styled(UserCredentials)`
  display: none;
  margin-right: 1.25rem;

  @media screen and (min-width: 1080px) {
    display: flex;
  }
`;

export const StyledUkrainianFlag = styled(UkrainianFlag)`
  display: none;

  @media screen and (min-width: 1080px) {
    display: block;
  }
`;

export const StyledDropdownButton = styled(DropdownButton)`
  display: none;
  margin-left: 0.625rem;

  @media screen and (min-width: 1080px) {
    display: block;
  }
`;

export const StyledLogo = styled.img`
  display: block;
  padding: 1rem;
  padding-left: 0;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ControlButton = styled.button`
  padding: 0.5rem;
`;
