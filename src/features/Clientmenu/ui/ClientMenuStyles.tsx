import styled from "styled-components";

import { Notification } from "features/Notification";
import { DropdownButton } from "features/DropdownButton";

export const ClientMenuContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const QuestionButton = styled.button`
  flex-direction: row;
  gap: 0.5rem;
  margin-right: 1.25rem;
`;

export const StyledNotification = styled(Notification)`
  margin-right: 1.5rem;
`;

export const StyledDropdownButton = styled(DropdownButton)`
  margin-left: 0.25rem;
`;
