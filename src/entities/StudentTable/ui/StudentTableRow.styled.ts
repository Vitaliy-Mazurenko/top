import styled from "styled-components";

import { UserCredentials } from "features/UserCredentials";

export const StyledTableRow = styled.tr`
  height: 64px;

  td {
    padding: 8px;
    vertical-align: middle;
  }

  &:last-child {
    height: 85px;
  }

  &:last-child td {
    vertical-align: baseline;
    padding: 16px 8px;
  }
`;

export const StyledUserCredentials = styled(UserCredentials)`
  justify-content: center;

  & p {
    font-size: 16px;
  }
`;
