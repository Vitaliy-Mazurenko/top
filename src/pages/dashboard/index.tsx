import React from "react";

import { ManagerNavbar } from "widget/Navbars";
import { DashboardHeader } from "widget/DashboardHeader";

import { Calendar } from "features/Calendar/Calendar";

import { StatisticBlocksSection } from "entities/PetcentageStatistics/StatisticBlocksSection";
import { DashboardChart } from "entities/DashboardChart";
import { StudentsTable } from "entities/StudentTable";

import {
  CalendarAndChartWrapper,
  DashboardContainer,
  LeftNavBar,
  RightSideContent,
  StyledDaschboard,
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
    homeworkCompleteness: 23,
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
    homeworkCompleteness: 45,
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
    homeworkCompleteness: 91,
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

export const DaschboardPage: React.FC = () => {
  const [selectedDate, setSelectedDay] = React.useState(new Date());

  return (
    <DashboardContainer>
      <StyledDaschboard>
        <LeftNavBar>{/* <ManagerNavbar /> */}</LeftNavBar>

        <RightSideContent>
          <DashboardHeader />
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
        </RightSideContent>
      </StyledDaschboard>
    </DashboardContainer>
  );
};
