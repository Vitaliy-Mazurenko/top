import "./dashboardHeaderTablet.css";
import logoURL from "shared/assets/img/logo.svg";
import {
  LogoWrap,
} from "./HeaderPanel.styled";

// import {
//   StyledDropdownButton,
//   StyledHeader,
//   StyledNotification,
//   StyledUserCredentials,
// } from "./Dashboard.styled";

const HeaderTablet = () => {
  return (
    <div className="Header">
    <div className="Header-logo">
    <LogoWrap src={logoURL} />
    </div>
    <div className="Hamburger-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  );
};

export default HeaderTablet;