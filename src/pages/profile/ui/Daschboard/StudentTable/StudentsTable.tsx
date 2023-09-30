import StudentTableRow from "./StudentTableRow";
import {
  StyledTable,
  StyledTabledBody,
  StyledTabledHead,
} from "./StudentTable.styled";

import { StudentInterface } from "../Daschboard";

const StudentsTable = ({
  studentsData,
}: {
  studentsData: StudentInterface[];
}) => {
  return (
    <StyledTable>
      <StyledTabledHead>
        <tr>
          <th style={{ padding: "24px 0" }}>Студенти</th>
          <th>Вік</th>
          <th>Прогрес</th>
          <th>Домашні завдання</th>
          <th>Оцінки</th>
          <th>Кількість входів</th>
          <th>Країна</th>
        </tr>
      </StyledTabledHead>
      <StyledTabledBody>
        {studentsData.map((student) => (
          <StudentTableRow data={student} />
        ))}
      </StyledTabledBody>
    </StyledTable>
  );
};

export default StudentsTable;
