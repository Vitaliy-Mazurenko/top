import styled from "styled-components";

export const TableContainer = styled.table`
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin-left: 144px;
`;

export const SearchContainer = styled.div`
  border: 1px solid;
  display: flex;
  align-items: center;

  width: 256px;
  height: 32px;
`;

export const SearchInputField = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  width: 256px;
  height: 54px;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  width: 256px;
  height: 32px;
  margin-bottom: 96px;
  margin-top: 40px;
  margin-right: 1050px;
  margin-left: 40px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  margin-right: 16px;
  gap: 4px;
  border: 1px solid #e8e8e8;

  padding: 5px 12px;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const TableHeader = styled.thead`
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  width: 248px;
  height: 87px;
  font-family: "Inter Regular";
  font-size: 14px;
`;

export const TableHeaderRow = styled.tr``;

export const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: center;
  &:nth-child(1) {
    border-right: 1px solid #e8e8e8;
  }
  &:hover {
    background-color: #c6e1ec;
    font-size: 20px;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child() {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  text-align: center;
  width: 248px;
  height: 87px;
  &:nth-child(1) {
    border-right: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    color: #ff8c33 !important;
  }
`;
