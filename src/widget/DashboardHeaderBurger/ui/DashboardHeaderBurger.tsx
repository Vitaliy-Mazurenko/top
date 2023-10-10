// import "./dashboardHeaderTablet.css";
import styled from 'styled-components';
import HeaderBurger from './HeaderBurger';
import logoURL from "shared/assets/img/logo.svg";
import {
  LogoWrap,
} from "./HeaderPanel.styled";

// import {
//   StyledHeader,
// } from "./Dashboard.styled";


const Nav = styled.nav`
  width: 100%;
  height: 85px;
  padding: 15px 40px;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  background-color: #F4F9FB;

`

export const DashboardHeaderBurger = () => {
  return (
    <Nav>
      <div className='headerWpap'>
      <LogoWrap src={logoURL} />
      <HeaderBurger open={false} onClick={function (): void {
        throw new Error('Function not implemented.');
      } } />
      </div>
    </Nav>
  )
};