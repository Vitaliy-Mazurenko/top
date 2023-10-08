import { useState, FC } from "react";

import { DashboardHeader } from "widget/DashboardHeader";

import { Calendar } from "features/Calendar/Calendar";

import { StatisticBlocksSection } from "entities/PetcentageStatistics/StatisticBlocksSection";
import { DashboardChart } from "entities/DashboardChart";
import { StudentsTable } from "entities/StudentTable";

import { Container } from "shared/ui/Container";
import { useMobileMenu } from "shared/hooks/useMobileMenu";

import {
  CalendarAndChartWrapper,
  Content,
  StyledDaschboard,
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
    title: "",
  },
  {
    id: 2,
    percentage: 40,
    title: "",
  },
  {
    id: 3,
    percentage: 30,
    title: "",
  },
  {
    id: 4,
    percentage: 25,
    title: "",
  },
  {
    id: 5,
    percentage: 80,
    title: "",
  },
  {
    id: 6,
    percentage: 23,
    title: "",
  },
  {
    id: 7,
    percentage: 10,
    title: "",
  },
];

export const DaschboardPage: FC = () => {
  const { isMenuShown: isNavBarShown, setIsMenuShown: setIsNavBarShown } =
    useMobileMenu({
      buttonId: "#dashboard-burger-btn",
      mobileMenuId: "#dashboard-mobile-menu",
    });
  const [selectedDate, setSelectedDay] = useState(new Date());

  const toggleNavBar = () => {
    setIsNavBarShown((s) => !s);
  };

  return (
    <StyledDaschboard>
      <StyledDashboardNavBar $visible={isNavBarShown} />

      <div>
        <DashboardHeader onMenuBtnClick={toggleNavBar} />

        <Content>
          <Container>
            <StatisticBlocksSection />
            <CalendarAndChartWrapper>
              <Calendar
                locale="uk-UA"
                selectedDate={selectedDate}
                selectDate={(date) => setSelectedDay(date)}
              />
              <DashboardChart data={chartData} />
            </CalendarAndChartWrapper>
            <StudentsTable students={tableData} />
          </Container>
        </Content>
      </div>
    </StyledDaschboard>
  );
};
