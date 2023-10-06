import {
  StyledTableRow,
  StyledUserCredentials,
} from "./StudentTableRow.styled";

export interface StudentTableRowProps {
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

const StudentTableRow = (props: StudentTableRowProps) => {
  const {
    firstName,
    lastName,
    age,
    progress,
    homeworkCompleteness,
    rating,
    attendance,
    country,
  } = props;

  return (
    <StyledTableRow>
      <td>
        <StyledUserCredentials firstName={firstName} lastName={lastName} />
      </td>
      <td>{age}</td>
      <td>%{progress}</td>
      <td>Зроблено %{homeworkCompleteness}</td>
      <td>{rating}</td>
      <td>{attendance}</td>
      <td>{country}</td>
    </StyledTableRow>
  );
};

export default StudentTableRow;
