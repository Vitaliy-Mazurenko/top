import styled from "styled-components";

import { Notification } from "features/Notification";
import { UserCredentials } from "features/UserCredentials";
import { DropdownButton } from "features/DropdownButton";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 40px;
  padding: 20px 0;
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
