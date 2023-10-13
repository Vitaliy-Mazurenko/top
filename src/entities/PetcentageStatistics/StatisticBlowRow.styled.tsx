import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "shared/ui/Container";

export const StyledContainer = styled(Container)`
  padding: 0;
  position: relative;

  @media screen and (min-width: 480px) {
    padding: 0 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 1300px) {
    gap: 42px;
  }
`;

export const SwiperWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 24px;

  @media screen and (min-width: 480px) {
    width: calc(100% + (100vw - 100%) / 2 - 10px);
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 28px;
  }
`;

export const StyledSwiper = styled(Swiper)`
  overflow: visible;
  position: static;

  & .swiper-pagination {
    bottom: 0px;
  }

  & .swiper-slide {
    width: unset;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: unset;
`;
