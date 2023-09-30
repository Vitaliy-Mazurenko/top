import {
  AvatarIcon,
  CountryTD,
  NameText,
  NameWrapper,
  StyledTableRow,
} from "./StudentTableRow.styled";

import { StudentInterface } from "../Daschboard";

const StudentTableRow = ({ data }: { data: StudentInterface }) => {
  const {
    firstName,
    lastName,
    age,
    progress,
    homeworkCompleteness,
    rating,
    attendance,
    country,
  } = data;

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
      <CountryTD className="country-cell">{country}</CountryTD>
    </StyledTableRow>
  );
};

export default StudentTableRow;
