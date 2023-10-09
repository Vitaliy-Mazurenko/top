import styled from 'styled-components';
import HeaderBurger from './HeaderBurger';


const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`

export const DashboardHeaderBurger = () => {
  return (
    <Nav>
      {/* <div className="logo">
      <LogoWrap src={logoURL} />
      </div> */}
      <HeaderBurger />
    </Nav>
  )
};