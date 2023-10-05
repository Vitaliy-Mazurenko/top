import styled from "styled-components";

export const TableContainer = styled.table`
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin-left: 9rem;
  margin-right: 6.25rem;
  width: 100%;
`;

export const SearchContainer = styled.div`
  border: 1px solid;
  display: flex;
  align-items: center;
  width: 16rem;
  height: 2rem;
`;

export const SearchInputField = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  width: 16rem;
  height: 3.37rem;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  width: 16rem;
  height: 2rem;
  margin-bottom: 6rem;
  margin-top: 2.87rem;
  margin-right: 8.75rem;
  margin-left: 2.5rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 18.75rem;
  width: auto;
  height: 2rem;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  color: #aeaeb2;
  margin-right: 1rem;
  gap: 4px;
  border: 1px solid #e8e8e8;
  &:nth-child(2) {
    border: 1px solid #ff8c33;
  }
  cursor: pointer;
  border-radius: 2px;
  padding: 5px 12px;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  /* input[type="checkbox"]:not(:checked) + svg {
    background: red;
  } */
`;

export const TableHeader = styled.thead`
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  &:nth-child(1) {
    width: 15.5rem;
  }
  font-family: "Inter Regular";
  font-size: 0.87rem;
`;

export const StatusCell = styled.td`
  padding: 0.31rem;
  border-radius: 5px;

  &.status-ready {
    border: 2px solid green;
  }

  &.status-development {
    border: 2px solid blue;
  }

  &.status-frozen {
    border: 2px solid gray;
  }
`;

export const TableHeaderRow = styled.tr``;

export const TableHeaderCell = styled.th`
  color: #636366;
  padding: 1.75rem;
  text-align: center;
  gap: 1.12rem;

  &:nth-child(1) {
    border-right: 1px solid #e8e8e8;
    font-size: 1.25rem;
  }
  &:nth-child(2) {
    padding: 0.62rem;
  }
  &:nth-child(7) {
    padding: 0.62rem;
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
  padding: 0.5rem;
  vertical-align: middle;
  text-align: center;
  align-items: center;
  width: 8.12rem;
  height: 5.25rem;

  &:nth-child(1) {
    width: 16rem;
    height: 5.43rem;
    border-right: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    color: #ff8c33 !important;
  }
  &:nth-child(5) {
    color: #8054e3 !important;
  }
  &:nth-child(6) {
    margin: 1.68rem;
  }
  &:nth-child(7) {
    cursor: pointer;
  }
`;
