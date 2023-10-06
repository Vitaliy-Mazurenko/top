import "./dashboardHeaderTablet.css";
import HeaderTablet from "./HeaderTablet";
import { slide as Menu } from "react-burger-menu";
import { ManagerNavbarTablet } from "../../Navbars/ManagerNavbarTablet/ManagerNavbarTablet"

// import {
//   StyledDropdownButton,
//   StyledHeader,
//   StyledNotification,
//   StyledUserCredentials,
// } from "./Dashboard.styled";

export const DashboardHeaderTablet = () => {
  return (
    <div id="container">
 <Menu pageWrapId="menu" outerContainerId="container">
 <ManagerNavbarTablet/>
      </Menu>
      <HeaderTablet />

    </div>
  );
};
