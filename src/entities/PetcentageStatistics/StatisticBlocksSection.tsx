import { FC } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Pagination, A11y } from "swiper/modules";

import { Container } from "shared/ui/Container";

import {
  StyledContainer,
  StyledSwiper,
  StyledSwiperSlide,
  SwiperWrapper,
  Wrapper,
} from "./StatisticBlowRow.styled";
import StatisticBlock from "./StatisticBlock";

import "swiper/css";
import "swiper/css/pagination";

export const StatisticBlocksSection: FC = () => {
  const isPCScreenSize = useMediaQuery("(min-width: 1080px)");

  if (isPCScreenSize) {
    return (
      <Container>
        <Wrapper>
          <StatisticBlock
            text="Випускників, які отримали роботу "
            percentage={2}
            color="#faeffa"
          />
          <StatisticBlock
            text="Прогрес успішності студентів"
            percentage={78}
            color="#f4f9fb"
          />
          <StatisticBlock
            text="Активність на платформі"
            percentage={67}
            color="#f0fcf9"
          />
          <StatisticBlock
            text="Статистика за завданнями "
            percentage={87}
            color="#fcfaee"
          />
          <StatisticBlock
            text="Оцінки та зворотний зв'язок від студентів"
            percentage={87}
            color="#eae2fa"
          />
        </Wrapper>
      </Container>
    );
  } else {
    return (
      <StyledContainer>
        <SwiperWrapper>
          <StyledSwiper
            modules={[Pagination, A11y]}
            spaceBetween={24}
            slidesPerView="auto"
            pagination={{ clickable: true }}
          >
            <StyledSwiperSlide>
              <StatisticBlock
                text="Випускників, які отримали роботу "
                percentage={2}
                color="#faeffa"
              />
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <StatisticBlock
                text="Прогрес успішності студентів"
                percentage={78}
                color="#f4f9fb"
              />
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <StatisticBlock
                text="Активність на платформі"
                percentage={67}
                color="#f0fcf9"
              />
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <StatisticBlock
                text="Статистика за завданнями "
                percentage={87}
                color="#fcfaee"
              />
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <StatisticBlock
                text="Оцінки та зворотний зв'язок від студентів"
                percentage={87}
                color="#eae2fa"
              />
            </StyledSwiperSlide>
          </StyledSwiper>
        </SwiperWrapper>
      </StyledContainer>
    );
  }
};
