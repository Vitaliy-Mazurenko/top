import React from "react";
import StudentsTable from "../StudentTable";
import { Calendar } from "../Calendar/Calendar";
import DashboardChart from "entities/DashboardChart/ui";

import {
  CalendarAndChartWrapper,
  StyledDaschboard,
} from "./StyledDaschboard.styled";

import StatisticBlocksSection from "../PetcentageStatistics/StatisticBlocksSection";
import { DashboardHeader } from "widget/DashboardHeader";
import { ManagerNavbar } from 'widget/Navbars'

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

export const DaschboardPage: React.FC = () => {
  const [selectedDate, setSelectedDay] = React.useState(new Date());

  return (
    <StyledDaschboard>
      {/* <LeftNavBar> */}
        <ManagerNavbar />
      {/* </LeftNavBar> */}

      <div style={{ marginLeft: "auto", flexBasis: "83.4%" }}>
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
      </div>
    </StyledDaschboard>
  );
};
