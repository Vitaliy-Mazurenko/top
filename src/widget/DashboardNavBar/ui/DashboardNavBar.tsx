import { RefObject } from "react";
import { StyledManagerNavBar, Wrapper } from "./DashboardNavBar.styled";

interface IDashboardNavBarProps {
  className?: string;
  mobileMenuRef: RefObject<HTMLElement>;
}

export const DashboardNavBar: React.FC<IDashboardNavBarProps> = ({
  className,
  mobileMenuRef,
}) => {
  return (
    <Wrapper
      ref={mobileMenuRef}
      className={className}
      id="dashboard-mobile-menu"
    >
      <StyledManagerNavBar />
    </Wrapper>
  );
};
