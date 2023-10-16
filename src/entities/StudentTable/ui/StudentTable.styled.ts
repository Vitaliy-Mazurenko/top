import styled from "styled-components";

import { Swiper } from "swiper/react";

export const StyledTable = styled.table`
  width: 100%;
  border-radius: 8px;
  background-color: #f4f9fb;
  font-weight: 500;

  @media screen and (min-width: 1080px) {
    font-weight: 400;
  }
`;

export const StyledTabledHead = styled.thead`
  text-transform: uppercase;
  font-size: 8px;

  @media screen and (min-width: 480px) {
    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1080px) {
    border-bottom: 1px solid #a6bdc7;
  }
`;

export const StyledTabledHeadCell = styled.th`
  padding: 19px 5px 15px;
  vertical-align: middle;

  @media screen and (min-width: 480px) {
    padding: 18px 8px 6px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px 8px 11px;
  }

  @media screen and (min-width: 1080px) {
    height: 67px;
    padding: 8px;
  }
`;

export const StyledTabledBody = styled.tbody`
  text-align: center;
`;

export const TableSwiper = styled(Swiper)`
  padding-bottom: 24px;

  & .swiper-pagination {
    bottom: 0;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 28px;
  }
`;
