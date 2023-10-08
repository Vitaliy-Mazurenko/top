import { StyledManagerNavBar, Wrapper } from "./DashboardNavBar.styled";

interface IDashboardNavBarProps {
  className?: string;
}

export const DashboardNavBar: React.FC<IDashboardNavBarProps> = ({
  className,
}) => {
  return (
    <Wrapper className={className} id="dashboard-mobile-menu">
      <StyledManagerNavBar />
    </Wrapper>
  );
};
