import styled from "styled-components";

import { UserCredentials } from "features/UserCredentials";

export const StyledTableRow = styled.tr`
  height: 59px;
  font-size: 10px;
  line-height: 1.5;

  td {
    padding: 5px;
    vertical-align: middle;
  }

  @media screen and (min-width: 480px) {
    height: 72px;

    td {
      padding: 8px;
      vertical-align: middle;
    }

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
    font-size: 16px;

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
  display: block;

  & p {
    font-size: 6px;
    line-height: 2.5;
    color: #000;
  }

  span {
    margin: 0 auto;
  }

  @media screen and (min-width: 480px) {
    & p {
      font-size: 8px;
      line-height: 1.87;
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1080px) {
    display: flex;
    gap: 8px;
    justify-content: center;

    & span {
      margin: 0;
    }

    & p {
      font-size: 16px;
    }
  }
`;
