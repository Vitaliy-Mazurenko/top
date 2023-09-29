import styled from "styled-components";

export const TableContainer = styled.table`
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin-left: 144px;
  margin-right: 100px;
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
  margin-top: 46px;
  margin-right: 147px;
  margin-left: 40px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 300px;
  width: auto;
  height: 32px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  margin-right: 16px;
  gap: 4px;
  border: 1px solid #e8e8e8;
  cursor: pointer;
  padding: 5px 12px;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const TableHeader = styled.thead`
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  &:nth-child(1) {
    width: 248px;
  }
  font-family: "Inter Regular";
  font-size: 14px;
`;

export const TableHeaderRow = styled.tr``;

export const TableHeaderCell = styled.th`
  padding: 28px;
  text-align: center;
  gap: 18px;
  &:nth-child(1) {
    border-right: 1px solid #e8e8e8;
    font-size: 20px;
  }
  &:hover {
    background-color: #c6e1ec;
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
  vertical-align: middle;
  text-align: center;
  align-items: center;
  width: 130px;
  height: 84px;
  &:nth-child(1) {
    width: 256px;
    height: 87px;
    border-right: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    color: #ff8c33 !important;
  }
`;
