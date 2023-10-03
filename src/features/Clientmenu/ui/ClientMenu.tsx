import { ClientMenuContainer, QuestionButton } from "./ClientMenuStyles";

import logoQuestion from "shared/assets/img/question-circle.svg";
import clientImg from "shared/assets/img/custom.png";

import { Notification } from "features/Notification";
import { UserCredentials } from "features/UserCredentials";
import { DropdownButton } from "features/DropdownButton";

export function ClientMenu() {
  return (
    <ClientMenuContainer>
      <QuestionButton>
        <img src={logoQuestion} alt="question" />
      </QuestionButton>

      <Notification style={{ marginRight: "25px" }} />
      <UserCredentials src={clientImg} firstName="Ім'я" lastName="Прізвище" />
      <DropdownButton style={{ marginLeft: "4px" }} />
    </ClientMenuContainer>
  );
}
