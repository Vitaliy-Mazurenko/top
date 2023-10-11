import styled from "styled-components";

import { Notification } from "features/Notification";

import { TabList } from "shared/ui/Tabs";

export const StyledFooter = styled.footer`
  z-index: 2;
  width: 100%;
  position: fixed;
  bottom: 0px;
  height: 82px;
  background-color: #f4f9fb;

  @media screen and (min-width: 480px) {
    height: 80px;
  }

  @media screen and (min-width: 768px) {
    height: 83px;
  }

  @media screen and (min-width: 1080px) {
    display: none;
  }
`;

export const StyledTabList = styled(TabList)`
  height: 100%;
  padding: 0 8px;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  align-items: center;

  & a {
    gap: 4px;
    padding: 0;
    flex-direction: column;

    &:hover {
      background-color: unset;
      color: unset;

      & div {
        background-color: #ff8c33;
      }
    }
  }

  & p {
    display: none;
  }

  & div {
    width: 48px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
  }

  @media screen and (min-width: 360px) {
    & div {
      width: 64px;
    }
  }

  @media screen and (min-width: 480px) {
    & a {
      padding: 0;
    }

    & p {
      display: block;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.33;
      letter-spacing: 0.5px;
    }
  }

  @media screen and (min-width: 510px) {
    & a {
      padding: 0.5rem;
    }
  }

  @media screen and (min-width: 640px) {
    & a {
      padding: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    & p {
      font-size: 16px;
      line-height: 1;
    }
  }
`;

export const StyledNotification = styled(Notification)`
  & img {
    display: block;
    width: 24px;
    height: 24px;
  }

  & span {
    right: -8px;
  }
`;
