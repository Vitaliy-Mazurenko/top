import React from "react";
import StudentsTable from "./StudentTable/StudentsTable";

export interface StudentInterface {
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
  return <StudentsTable studentsData={data} />;
};

export default Daschboard;
