import { DropdownButton } from "features/DropdownButton";
import { Notification } from "features/Notification";
import { UserCredentials } from "features/UserCredentials";
import { StyledHeader } from "./Dashboard.styled";

export const DashboardHeader = () => {
  return (
    <StyledHeader>
      <Notification style={{ marginRight: "25px" }} />
      <UserCredentials firstName="Ім'я" lastName="Прізвище" />
      <DropdownButton style={{ marginLeft: "10px" }} />
    </StyledHeader>
  );
};
