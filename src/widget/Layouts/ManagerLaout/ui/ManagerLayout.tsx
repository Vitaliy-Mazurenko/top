import { FC } from "react";
import { Outlet } from "react-router-dom";

import { ManagerHeader } from "widget/Headers";
import { EmployeeNavbar } from "widget/Navbars";

import { Container } from "shared/ui/Container";
import { RightSideContent, Wrapper } from "./ManagerLayout.styled";

export const ManagerLayout: FC = () => {
  return (
    <Wrapper>
      <EmployeeNavbar />
      <RightSideContent>
        <Container>
          <ManagerHeader />
          <Outlet />
        </Container>
      </RightSideContent>
    </Wrapper>
  );
};
