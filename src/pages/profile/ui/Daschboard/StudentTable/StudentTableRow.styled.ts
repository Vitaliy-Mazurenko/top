import styled from "styled-components";

export const StyledTableRow = styled.tr`
  &:last-child .country-cell {
    padding-bottom: 42px;
  }
`;

export const NameWrapper = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const AvatarIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 2px solid #ff8c33;

  border-radius: 50%;
  background-color: #d9d9d9;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const NameText = styled.p`
  font-weight: 500;
`;

export const CountryTD = styled.td`
  padding: 14px 0;
`;
