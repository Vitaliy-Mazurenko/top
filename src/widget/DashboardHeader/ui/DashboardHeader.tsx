import { FC } from "react";
import { Link } from "react-router-dom";

import { Container } from "shared/ui/Container";
import { UkrainianFlag } from "shared/ui/CustomSVG/UkrainianFlag";

import {
  ControlButton,
  ControlsWrapper,
  StyledDropdownButton,
  StyledHeader,
  StyledLogo,
  StyledNotification,
  StyledUserCredentials,
  HeaderInner,
  MobileContent,
  DesktopContent,
} from "./DashboardHeader.styled";

import logoImage from "shared/assets/img/logo.svg";
import burgerIcon from "shared/assets/icons/burger.svg";
import userIcon from "shared/assets/icons/user.svg";

interface IDashboardHeaderProps {
  onMenuBtnClick: () => void;
}

export const DashboardHeader: FC<IDashboardHeaderProps> = ({
  onMenuBtnClick,
}) => {
  return (
    <StyledHeader>
      <Container>
        {/* Desktop */}

        <DesktopContent>
          <HeaderInner>
            <StyledNotification />
            <StyledUserCredentials firstName="Ім'я" lastName="Прізвище" />
            <UkrainianFlag />
            <StyledDropdownButton />
          </HeaderInner>
        </DesktopContent>

        {/* Mobile */}

        <MobileContent>
          <HeaderInner>
            <Link to="/">
              <StyledLogo src={logoImage} alt="logo" />
            </Link>

            <ControlsWrapper>
              <ControlButton onClick={onMenuBtnClick} id="dashboard-burger-btn">
                <img src={burgerIcon} alt="burger menu icon" />
              </ControlButton>
              <ControlButton>
                <img src={userIcon} alt="user" />
              </ControlButton>
            </ControlsWrapper>
          </HeaderInner>
        </MobileContent>
      </Container>
    </StyledHeader>
  );
};
