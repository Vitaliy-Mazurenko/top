import { useState } from "react";
import { useTable, Column } from "react-table";
import { FaSearch } from "react-icons/fa";
import { SearchInputContainer, SearchInputField } from "./Table.styled";
import {
  TableContainer,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "./Table.styled";
import { CheckboxLabel } from "./Table.styled";
import CustomSVG2 from "shared/ui/CustomSVG/CustomSVG2";
import CustomSVG3 from "shared/ui/CustomSVG/CustomSVG3";
import CustomSVG4 from "shared/ui/CustomSVG/CustomSVG4";
import CloseSVG from "shared/ui/CustomSVG/CloseSVG";

const data = [
  {
    project: "Проєкт 1",
    time: "1 день",
    team: 5,
    people: 9,
    deadline: "01.10.23",
    status: "Готовий",
    add: <CustomSVG2 />,
  },
  {
    project: "Проєкт 7",
    time: "0 днів",
    team: 9,
    people: 0,
    deadline: "01.10.23",
    status: "В розробці",
    add: <CustomSVG3 />,
  },
  {
    project: "Проєкт 8",
    time: "2 тижні",
    team: 2,
    people: 3,
    deadline: "01.10.23",
    status: "В розробці",
    add: <CustomSVG4 />,
  },
  {
    project: "Проєкт 2",
    time: "1 місяць",
    team: 1,
    people: 1,
    deadline: "01.10.23",
    status: "Заморожений",
    add: <CustomSVG2 />,
  },
  {
    project: "Проєкт 6",
    time: "3 години",
    team: 12,
    people: 13,
    deadline: "20.08.23",
    status: "Готовий",
    add: <CustomSVG4 />,
  },
];

const columns: Column[] = [
  { Header: "Дані по проєкту", accessor: "project" },
  { Header: "Час в роботі", accessor: "time" },
  { Header: "Команда", accessor: "team" },
  { Header: "Кількість людей в команді", accessor: "people" },
  { Header: "Дедлайн", accessor: "deadline" },
  { Header: "Статус", accessor: "status" },
  { Header: "Додати в проєкт", accessor: "add" },
];

function Table() {
  const [searchText, setSearchText] = useState("");
  const [showAllProjects, setShowAllProjects] = useState(true);
  const [showReadyProjects, setShowReadyProjects] = useState(false);
  const [showInDevelopmentProjects, setShowInDevelopmentProjects] =
    useState(false);
  const [showFrozenProjects, setShowFrozenProjects] = useState(false);

  const filteredData = data.filter((project) => {
    return (
      (showAllProjects ||
        (showReadyProjects && project.status === "Готовий") ||
        (showInDevelopmentProjects && project.status === "В розробці") ||
        (showFrozenProjects && project.status === "Заморожений")) &&
      project.project.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Готовий":
        return "green";
      case "В розробці":
        return "blue";
      case "Заморожений":
        return "gray";
      default:
        return "black";
    }
  };

  const CustomSVG: React.FC<
    React.SVGProps<SVGSVGElement> & { color: string }
  > = ({ color, ...props }) => {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
        <circle cx="7.5" cy="8" r="7.5" fill={color} />
      </svg>
    );
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: filteredData,
    });

  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <SearchInputContainer>
          <FaSearch className="search-icon" />
          <SearchInputField
            type="text"
            placeholder="Search candidates..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </SearchInputContainer>

        <CheckboxLabel>
          <input
            type="checkbox"
            checked={showAllProjects}
            onChange={() => setShowAllProjects(!showAllProjects)}
            style={{ display: "none" }}
          />
          <CustomSVG color="#FF8C33" />
          Всі проекти
        </CheckboxLabel>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={showReadyProjects}
            onChange={() => setShowReadyProjects(!showReadyProjects)}
            style={{ display: "none" }}
          />
          <CustomSVG color="#34C759" />
          Готові проекти
        </CheckboxLabel>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={showInDevelopmentProjects}
            onChange={() =>
              setShowInDevelopmentProjects(!showInDevelopmentProjects)
            }
            style={{ display: "none" }}
          />
          <CustomSVG color="#C6E1EC" />
          Проекти в розробці
        </CheckboxLabel>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={showFrozenProjects}
            onChange={() => setShowFrozenProjects(!showFrozenProjects)}
            style={{ display: "none" }}
          />
          <CustomSVG color="#D9D9D9" />
          Заморожені проекти
        </CheckboxLabel>
        <button className="closeBtn">
          <CloseSVG />
        </button>
      </div>
      {/* Таблиця */}
      <TableContainer {...getTableProps()} className="table">
        <TableHeader>
          {headerGroups.map((headerGroup) => (
            <TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeaderCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableHeaderCell>
              ))}
            </TableHeaderRow>
          ))}
        </TableHeader>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell
                      {...cell.getCellProps()}
                      style={{
                        color: getStatusColor(
                          cell.column.id === "status"
                            ? cell.value.toString()
                            : ""
                        ),
                      }}
                    >
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>
    </div>
  );
}

export default Table;
