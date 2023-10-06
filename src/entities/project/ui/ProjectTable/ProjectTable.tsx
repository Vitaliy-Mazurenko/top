import React, { useState } from "react";
import { useTable, Column } from "react-table";
import { FaSearch } from "react-icons/fa";
import { SearchInputContainer, SearchInputField } from "./ProjectTable.styled";
import {
  TableContainer,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "./ProjectTable.styled";
import { CheckboxLabel } from "./ProjectTable.styled";
import CustomSVG2 from "shared/ui/CustomSVG/CustomSVG2";
import CustomSVG3 from "shared/ui/CustomSVG/CustomSVG3";
import CustomSVG4 from "shared/ui/CustomSVG/CustomSVG4";
import CloseSVG from "shared/ui/CustomSVG/CloseSVG";
import { AddCandidateModal } from "features/AddCandidate";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

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
    add: <CustomSVG3 />,
  },
  {
    project: "Проєкт 2",
    time: "1 місяць",
    team: 1,
    people: 1,
    deadline: "01.10.23",
    status: "Заморожений",
    add: <CustomSVG4 />,
  },
  {
    project: "Проєкт 6",
    time: "3 години",
    team: 12,
    people: 13,
    deadline: "20.08.23",
    status: "Готовий",
    add: <CustomSVG2 />,
  },
];

const columns: Column[] = [
  { Header: "Дані по проєкту", accessor: "project" },
  { Header: "Час в роботі", accessor: "time" },
  { Header: "Команда", accessor: "team" },
  { Header: "Учасників", accessor: "people" },
  { Header: "Дедлайн", accessor: "deadline" },
  { Header: "Статус", accessor: "status" },
  { Header: "Додати в проєкт", accessor: "add" },
];

export function ProjectTable() {
  const [searchText, setSearchText] = useState("");
  const [showAllProjects, setShowAllProjects] = useState(true);
  const [showReadyProjects, setShowReadyProjects] = useState(false);
  const [showInDevelopmentProjects, setShowInDevelopmentProjects] =
    useState(false);
  const [showFrozenProjects, setShowFrozenProjects] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  const filteredData = data.filter((project) => {
    const isReady = project.status === "Готовий";
    const isInDevelopment = project.status === "В розробці";
    const isFrozen = project.status === "Заморожений";

    return (
      (showAllProjects ||
        (showReadyProjects && isReady) ||
        (showInDevelopmentProjects && isInDevelopment) ||
        (showFrozenProjects && isFrozen)) &&
      project.project.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Готовий":
        return "#52C41A";
      case "В розробці":
        return "#95C3D5";
      case "Заморожений":
        return "#8C8C8C";
      default:
        return "#8C8C8C";
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

  const openModal = (projectName: string) => {
    setSelectedProject(projectName);
    setIsModalOpen(true);
  };

  return (
    <div
      style={{
        background: "white",
        display: "inline-block",
        height: "43.75rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <SearchInputContainer>
          <FaSearch
            className="search-icon"
            style={{ color: "#8E8E93", marginRight: "3px" }}
          />
          <SearchInputField
            type="text"
            placeholder="Search candidates"
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
            style={{
              display: "none",
              backgroundColor: showFrozenProjects ? "#D9D9D9" : "transparent",
            }}
          />
          <CustomSVG color="#D9D9D9" />
          Заморожені проекти
        </CheckboxLabel>
        <button className="closeBtn">
          <CloseSVG />
        </button>
      </div>
      {/* Таблиця */}
      <TableContainer
        {...getTableProps()}
        className="table"
        style={{ width: "1035px" }}
      >
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
                        ...(cell.column.id === "status" && {
                          border: `1px solid ${(() => {
                            switch (cell.value) {
                              case "Готовий":
                                return "#B7EB8F";
                              case "В розробці":
                                return "#95C3D5";
                              case "Заморожений":
                                return "#8C8C8C";
                              default:
                                return "#B7EB8F";
                            }
                          })()}`,
                          borderRadius: "2px",

                          display: "inline-block",
                          width: "130px",
                          height: "34px",
                          backgroundColor: `${(() => {
                            switch (cell.value) {
                              case "Готовий":
                                return "#F6FFED";
                              case "В розробці":
                                return "#C6E1EC";
                              case "Заморожений":
                                return "#F4F4F4";
                              default:
                                return "#F6FFED";
                            }
                          })()}`,
                        }),

                        color: getStatusColor(
                          cell.column.id === "status"
                            ? cell.value.toString()
                            : ""
                        ),
                      }}
                    >
                      {cell.column.id === "add" ? (
                        <div onClick={() => openModal("row.original.project")}>
                          {cell.value}
                        </div>
                      ) : (
                        cell.render("Cell")
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>

      {isModalOpen && (
        <AddCandidateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      )}
    </div>
  );
}
