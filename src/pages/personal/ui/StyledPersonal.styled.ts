import styled from "styled-components";

import { SubNavbar } from 'features/SubNavbar';


export const StyledSubNavbar = styled(SubNavbar)`
  color: #ff8c33;

  a:hover {
  color: #ff8c33;
}

  &.nav-list .nav-list__item:nth-child(3) a {
  color: #ff8c33;
}

`;

