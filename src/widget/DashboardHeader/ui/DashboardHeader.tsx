import { UkrainianFlag } from "shared/ui/CustomSVG/UkrainianFlag";

import {
  StyledDropdownButton,
  StyledHeader,
  StyledNotification,
  StyledUserCredentials,
} from "./Dashboard.styled";

export const DashboardHeader = () => {
  return (
    <StyledHeader>
      <StyledNotification />
      <StyledUserCredentials firstName="Ім'я" lastName="Прізвище" />
      <UkrainianFlag />
      <StyledDropdownButton />
    </StyledHeader>
  );
};
