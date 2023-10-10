import { ManagerFooter } from "./../ManagerFooter/ManagerFooter";
import { StyledFooter, FooterInner } from "./DashboardFooter.styled";

export const DashboardFooter = () => {
  return (
    <StyledFooter>
      <FooterInner>
        <ManagerFooter />
      </FooterInner>
    </StyledFooter>
  );
};
