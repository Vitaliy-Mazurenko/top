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

const StudentsTable = ({ students }: StudentsTableProps) => {
  return (
    <StyledTable>
      <StyledTabledHead>
        <tr>
          <StyledTabledHeadCell>Студенти</StyledTabledHeadCell>
          <StyledTabledHeadCell>Вік</StyledTabledHeadCell>
          <StyledTabledHeadCell>Прогрес</StyledTabledHeadCell>
          <StyledTabledHeadCell>Домашні завдання</StyledTabledHeadCell>
          <StyledTabledHeadCell>Оцінки</StyledTabledHeadCell>
          <StyledTabledHeadCell>Кількість входів</StyledTabledHeadCell>
          <StyledTabledHeadCell>Країна</StyledTabledHeadCell>
        </tr>
      </StyledTabledHead>
      <StyledTabledBody>
        {students.map((student) => (
          <StudentTableRow {...student} />
        ))}
      </StyledTabledBody>
    </StyledTable>
  );
};

export default StudentsTable;
