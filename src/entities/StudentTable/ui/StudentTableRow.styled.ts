import styled from "styled-components";

import { UserCredentials } from "features/UserCredentials";

export const StyledTableRow = styled.tr`
  height: 59px;

  td {
    padding: 8px;
    vertical-align: middle;
  }

  @media screen and (min-width: 480px) {
    height: 72px;

    &:last-child {
      height: 80px;
    }

    &:last-child td {
      padding: 8px 8px 18px;
    }
  }

  @media screen and (min-width: 768px) {
    &:last-child {
      height: 82px;
    }

    &:last-child td {
      padding: 8px 8px 20px;
    }
  }

  @media screen and (min-width: 1080px) {
    height: 64px;

    &:last-child {
      height: 85px;
    }

    &:last-child td {
      vertical-align: baseline;
      padding: 16px 8px;
    }
  }
`;

export const StyledUserCredentials = styled(UserCredentials)`
  justify-content: center;

  & p {
    font-size: 16px;
  }
`;
