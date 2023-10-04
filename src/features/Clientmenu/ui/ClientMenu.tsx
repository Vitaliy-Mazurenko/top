import {
  ClientMenuContainer,
  QuestionButton,
  StyledDropdownButton,
  StyledNotification,
} from "./ClientMenuStyles";

import logoQuestion from "shared/assets/img/question-circle.svg";
import clientImg from "shared/assets/img/custom.png";

import { UserCredentials } from "features/UserCredentials";

export function ClientMenu() {
  return (
    <ClientMenuContainer>
      <QuestionButton>
        <img src={logoQuestion} alt="question" />
      </QuestionButton>

      <StyledNotification />
      <UserCredentials src={clientImg} firstName="Ім'я" lastName="Прізвище" />
      <StyledDropdownButton />
    </ClientMenuContainer>
  );
}
