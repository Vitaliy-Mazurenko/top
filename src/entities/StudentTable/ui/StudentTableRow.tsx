import { useMediaQuery } from "usehooks-ts";

import {
  StyledTableRow,
  StyledUserCredentials,
} from "./StudentTableRow.styled";
import { CompletenessIcon } from "shared/ui/CompletenessIcon";

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

  const isPCScreenSize = useMediaQuery("(min-width: 1080px)");

  return (
    <StyledTableRow>
      <td>
        <StyledUserCredentials firstName={firstName} lastName={lastName} />
      </td>
      <td>{age}</td>
      <td>
        {isPCScreenSize ? (
          `%${progress}`
        ) : (
          <CompletenessIcon percentage={progress} />
        )}
      </td>
      <td>
        {isPCScreenSize ? (
          `Зроблено %${homeworkCompleteness}`
        ) : (
          <CompletenessIcon percentage={homeworkCompleteness} />
        )}
      </td>
      <td>{rating}</td>
      <td>{attendance}</td>
      <td>{country}</td>
    </StyledTableRow>
  );
};

export default StudentTableRow;
