import { useState, FC, useRef } from "react";

import { DashboardHeader } from "widget/DashboardHeader";

import { StatisticBlocksSection } from "entities/PetcentageStatistics/StatisticBlocksSection";
import { StudentsTable } from "entities/StudentTable";

import { Container } from "shared/ui/Container";
import { useMobileMenu } from "shared/hooks/useMobileMenu";

import {
  CalendarAndChartWrapper,
  Content,
  RightSideContent,
  StyledCalendar,
  StyledDaschboard,
  StyledDashboardChart,
  StyledDashboardNavBar,
} from "./ui/StyledDaschboard.styled";

interface StudentInterface {
  studentId: number;
  firstName: string;
  lastName: string;
  age: number;
  progress: number;
  homeworkCompleteness: number;
  rating: number;
  attendance: number;
  country: string;
}

export interface ChartItemInterface {
  id: number;
  percentage: number;
  title: string;
}

const tableData: StudentInterface[] = [
  {
    studentId: 1,
    firstName: "Ім'я",
    lastName: "Прізвище",
    age: 25,
    progress: 75,
    homeworkCompleteness: 68,
    rating: 100,
    attendance: 4,
    country: "Ukraine",
  },
  {
    studentId: 2,
    firstName: "Ім'я",
    lastName: "Прізвище",
    age: 25,
    progress: 75,
    homeworkCompleteness: 68,
    rating: 100,
    attendance: 4,
    country: "Ukraine",
  },
  {
    studentId: 3,
    firstName: "Ім'я",
    lastName: "Прізвище",
    age: 25,
    progress: 75,
    homeworkCompleteness: 68,
    rating: 100,
    attendance: 4,
    country: "Ukraine",
  },
  {
    studentId: 4,
    firstName: "Ім'я",
    lastName: "Прізвище",
    age: 25,
    progress: 75,
    homeworkCompleteness: 68,
    rating: 100,
    attendance: 4,
    country: "Ukraine",
  },
];

const chartData: ChartItemInterface[] = [
  {
    id: 1,
    percentage: 100,
    title: "нд",
  },
  {
    id: 2,
    percentage: 40,
    title: "пн",
  },
  {
    id: 3,
    percentage: 30,
    title: "вт",
  },
  {
    id: 4,
    percentage: 25,
    title: "ср",
  },
  {
    id: 5,
    percentage: 80,
    title: "чт",
  },
  {
    id: 6,
    percentage: 23,
    title: "пт",
  },
  {
    id: 7,
    percentage: 10,
    title: "сб",
  },
];

export const DaschboardPage: FC = () => {
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
          <StatisticBlocksSection />
          <Container>
            <CalendarAndChartWrapper>
              <StyledCalendar
                locale="uk-UA"
                selectedDate={selectedDate}
                selectDate={(date) => setSelectedDay(date)}
              />
              <StyledDashboardChart data={chartData} />
            </CalendarAndChartWrapper>
            <StudentsTable students={tableData} />
          </Container>
        </Content>
      </RightSideContent>
    </StyledDaschboard>
  );
};
