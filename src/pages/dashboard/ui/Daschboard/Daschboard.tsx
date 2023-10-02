import React from "react";
import StudentsTable from "../StudentTable";
import { Calendar } from '../Calendar/Calendar';
import Navbar from '../../../profile/ui/navbar/Navbar';
import styled from 'styled-components';
const StyledDaschboard = styled.div`
  display: flex;
  max-height: 100%;
`


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

const data: StudentInterface[] = [
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

const Daschboard: React.FC = () => {
  const [selectedDate, setSelectedDay] = React.useState(new Date());
  return (
    <StyledDaschboard>
    <Navbar />
    <div>
    <Calendar locale="uk-UA" selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)} />
    <StudentsTable students={data} />
    </div>
    </StyledDaschboard>
  )
};

export default Daschboard;
