import {
  AvatarIcon,
  NameText,
  NameWrapper,
  StyledTableRow,
} from "./StudentTableRow.styled";

export interface StudentTableRowProps {
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
        <NameWrapper>
          <AvatarIcon>{`${firstName[0]}${lastName[0]}`}</AvatarIcon>
          <NameText>
            {firstName} {lastName}
          </NameText>
        </NameWrapper>
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
