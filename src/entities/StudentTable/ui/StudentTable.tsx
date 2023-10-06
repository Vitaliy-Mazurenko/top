import { useMediaQuery } from "usehooks-ts";

import StudentTableRow, { StudentTableRowProps } from "./StudentTableRow";
import {
  StyledTable,
  StyledTabledBody,
  StyledTabledHead,
  StyledTabledHeadCell,
} from "./StudentTable.styled";

interface StudentsTableProps {
  students: StudentTableRowProps[];
}

export const StudentsTable = ({ students }: StudentsTableProps) => {
  const isPCScreenSize = useMediaQuery("(min-width: 1080px)");

  return (
    <StyledTable>
      <StyledTabledHead>
        <tr>
          <StyledTabledHeadCell>Студенти</StyledTabledHeadCell>
          <StyledTabledHeadCell>Вік</StyledTabledHeadCell>
          <StyledTabledHeadCell>Прогрес</StyledTabledHeadCell>
          <StyledTabledHeadCell>
            {isPCScreenSize ? "Домашні завдання" : "дз"}
          </StyledTabledHeadCell>
          <StyledTabledHeadCell>Оцінки</StyledTabledHeadCell>
          <StyledTabledHeadCell>
            {isPCScreenSize ? "Кількість входів" : "Входи"}
          </StyledTabledHeadCell>
          <StyledTabledHeadCell>Країна</StyledTabledHeadCell>
        </tr>
      </StyledTabledHead>
      <StyledTabledBody>
        {students.map((student) => (
          <StudentTableRow key={student.studentId} {...student} />
        ))}
      </StyledTabledBody>
    </StyledTable>
  );
};
