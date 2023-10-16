import { useState, FC, useRef } from "react";

import { DashboardHeader } from "widget/DashboardHeader";
// import { ManagerFooterCalendar } from "widget/Footers";

import { Container } from "shared/ui/Container";
import { useMobileMenu } from "shared/hooks/useMobileMenu";

import {
  CalendarAndChartWrapper,
  Content,
  RightSideContent,
  StyledCalendarMobile,
  StyledDaschboard,
  StyledDashboardNavBar,
} from "../../ui/StyledDaschboard.styled";

export interface ChartItemInterface {
  id: number;
  percentage: number;
  title: string;
}


export const CalendarPage: FC = () => {
  const burgerButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const { isMenuShown: isNavBarShown, setIsMenuShown: setIsNavBarShown } =
    useMobileMenu({
      buttonElementRef: burgerButtonRef,
      mobileMenuElementRef: mobileMenuRef,
    });
  const [selectedDate, setSelectedDay] = useState(new Date());

  const toggleNavBar = () => {
    setIsNavBarShown((s) => !s);
  };

  return (
    <StyledDaschboard>
      <StyledDashboardNavBar
        mobileMenuRef={mobileMenuRef}
        $visible={isNavBarShown}
      />

      <RightSideContent>
        <DashboardHeader
          burgerButtonRef={burgerButtonRef}
          onMenuBtnClick={toggleNavBar}
        />

        <Content>
          <Container>
            <CalendarAndChartWrapper>
              <StyledCalendarMobile
                locale="uk-UA"
                selectedDate={selectedDate}
                selectDate={(date) => setSelectedDay(date)}
              />
            </CalendarAndChartWrapper>
          </Container>
        </Content>
      </RightSideContent>
      {/* <ManagerFooterCalendar /> */}
    </StyledDaschboard>
  );
};
