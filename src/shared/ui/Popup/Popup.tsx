import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTable, Column } from "react-table";

import green from "../CustomSVG/green.svg";
import yellow from "../CustomSVG/yellow.svg";
import red from "../CustomSVG/red.svg";
import orange from "../CustomSVG/orange.svg";

type Data = {
  Задача: string;
  Виконавець: string;
  Дедлайн: string;
  Статус: string;
  Прогрес: string;
};

const columns: Column<Data>[] = [
  {
    Header: <div style={{ display: "flex", marginBottom: "20px" }}>Задача</div>,

    accessor: "Задача",
    Cell: ({ row }: any) => (
      <div style={{ marginRight: "1.56rem", fontSize: "0.87rem" }}>
        {row.original.Задача}
      </div>
    ),
  },

  {
    Header: (
      <div style={{ display: "flex", marginBottom: "1.25rem" }}>Виконавець</div>
    ),
    accessor: "Виконавець",
    Cell: ({ row }: any) => {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={`./src/shared/assets/img/${row.original.Виконавець}.svg`}
            alt={row.original.Виконавець}
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              marginLeft: "0.5rem",
              marginRight: "2.75rem",
              fontSize: "0.87rem",
            }}
          >
            {row.original.Виконавець}
          </span>
        </div>
      );
    },
  },
  {
    Header: (
      <div
        style={{
          display: "flex",
          marginBottom: "1.25rem",
        }}
      >
        Дедлайн
      </div>
    ),
    accessor: "Дедлайн",
    Cell: ({ row }: any) => (
      <div
        style={{
          marginRight: "1.93rem",

          fontSize: "0.875rem",
        }}
      >
        {row.original.Дедлайн}
      </div>
    ),
  },
  {
    Header: (
      <div style={{ display: "flex", marginBottom: "1.25rem" }}>Статус</div>
    ),
    accessor: "Статус",
    Cell: ({ row }: any) => {
      let textColor = "black";
      let backgroundColor = "white";
      let borderColor = "purple";

      if (row.original.Статус === "Завершено") {
        textColor = "#406504";
        backgroundColor = "#4065042E";
        borderColor = "transparent";
      } else if (row.original.Статус === "Заморожено") {
        textColor = "#424049";
        backgroundColor = "#4240492E";
        borderColor = "transparent";
      } else if (row.original.Статус === "Тестувуння") {
        textColor = "#DF14E3";
        backgroundColor = "#DF14E32E";
        borderColor = "transparent";
      } else if (row.original.Статус === "Відмінено") {
        textColor = "#DF2209";
        backgroundColor = "#DF22092E";
        borderColor = "transparent";
      }

      const statusTextStyle = {
        fontSize: "0.75rem",
        fontWeight: 400,
        color: textColor,
        // textAlign: "center",
        fontFamily: "Osnova Pro",
      };

      const statusBorderStyle = {
        border: `0.125rem solid ${borderColor}`,
        backgroundColor: backgroundColor,
        padding: "0.25rem 0.5rem",
        color: textColor,
        fontFamily: "Osnova Pro",
        // textAlign: "center",
        marginRight: "2.125rem",
      };

      return (
        <div style={statusBorderStyle}>
          <span style={statusTextStyle}>{row.original.Статус}</span>
        </div>
      );
    },
  },

  {
    Header: (
      <div style={{ display: "flex", marginBottom: "1.25rem" }}>Прогрес</div>
    ),
    accessor: "Прогрес",
    Cell: ({ row }: any) => {
      const svgWidth = 32;
      const svgHeight = 32;
      let iconSrc = green;

      if (row.original.Статус === "Завершено") {
        iconSrc = green;
      } else if (row.original.Статус === "Заморожено") {
        iconSrc = yellow;
      } else if (row.original.Статус === "Тестувуння") {
        iconSrc = orange;
      } else if (row.original.Статус === "Відмінено") {
        iconSrc = red;
      }
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={iconSrc}
            alt="StatusIcon"
            style={{
              width: `${svgWidth}px`,
              height: `${svgHeight}px`,
              marginRight: "-1.56rem",
            }}
          />
          <span style={{ fontSize: "0.56rem" }}>{row.original.Прогрес}</span>
        </div>
      );
    },
  },
];

const data: Data[] = [
  {
    Задача: "Marketplace",
    Виконавець: "Irma Carr",
    Дедлайн: "25.10.2023",
    Статус: "Завершено",
    Прогрес: "100%",
  },
  {
    Задача: "Datascale AI app",
    Виконавець: "Irma Carr",
    Дедлайн: "20.10.2023",
    Статус: "Заморожено",
    Прогрес: "35%",
  },
  {
    Задача: "Media Channel branding",
    Виконавець: "Irma Carr",
    Дедлайн: "20.10.2023",
    Статус: "Тестувуння",
    Прогрес: "68%",
  },
  {
    Задача: "Сorolax iOS app development",
    Виконавець: "Irma Carr",
    Дедлайн: "20.10.2023",
    Статус: "Завершено",
    Прогрес: "100%",
  },
  {
    Задача: "Website",
    Виконавець: "Irma Carr",
    Дедлайн: "20.10.2023",
    Статус: "Відмінено",
    Прогрес: "50%",
  },
];

const DropdownButtonIcon = styled.svg`
  width: 0.93rem;
  height: 0.875rem;
  margin-left: 0.375rem;
`;

const Popup: React.FC = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        !e.target ||
        !(e.target instanceof Element) ||
        (!e.target.closest(".dropdown-button") &&
          !e.target.closest(".dropdown-list"))
      ) {
        setShowDropdown1(false);
        setShowDropdown2(false);
        setShowDropdown3(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Data>({
      columns,
      data,
    });

  return (
    <PopupContainer>
      <Header>
        <TableContainer>
          <DropdownButton
            onClick={() => setShowDropdown1(!showDropdown1)}
            className="dropdown-button"
            style={{
              background: "#E9E9E9",
              border: "0.125rem solid #8C8C8C",
            }}
          >
            Команда
            <DropdownButtonIcon
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.19038 4.6037C2.99709 4.80251 2.99709 5.12485 3.19038 5.32366L7.14997 9.39639C7.24279 9.49186 7.36869 9.5455 7.49996 9.5455C7.63122 9.5455 7.75712 9.49186 7.84994 9.39639L11.8095 5.32366C12.0028 5.12485 12.0028 4.80251 11.8095 4.6037C11.6162 4.40489 11.3029 4.40489 11.1096 4.6037L7.49996 8.31644L3.89034 4.60370C3.69705 4.40489 3.38367 4.40489 3.19038 4.6037Z"
                fill="#060606"
              />
            </DropdownButtonIcon>
            {showDropdown1 && (
              <DropdownList className="dropdown-list">
                <DropdownListItem>Johnny</DropdownListItem>
                <DropdownListItem>Helen</DropdownListItem>
                <DropdownListItem>Victorio</DropdownListItem>
              </DropdownList>
            )}
          </DropdownButton>

          <ImageContainer>
            <img
              src="./src/shared/assets/img/team1.svg"
              alt="Team 1"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "0.0625rem solid var(--white, #FFF)",
                boxShadow: "0px 1.02041px 16.32653px 0px rgba(0, 0, 0, 0.08)",
              }}
            />

            <img
              src="./src/shared/assets/img/team2.svg"
              alt="Team 2"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "90%",

                boxShadow: "0px 1.02041px 16.32653px 0px rgba(0, 0, 0, 0.08)",
              }}
            />

            <img
              src="./src/shared/assets/img/team3.svg"
              alt="Team 3"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                border: "1px solid var(--white, #FFF)",
                boxShadow: "0px 1.02041px 16.32653px 0px rgba(0, 0, 0, 0.08)",
              }}
            />

            <img
              src="./src/shared/assets/img/team4.png"
              alt="Team 4"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                border: "1px solid var(--white, #FFF)",
                boxShadow: "0px 1.02041px 16.32653px 0px rgba(0, 0, 0, 0.08)",
              }}
            />
          </ImageContainer>
          <DropdownButton
            onClick={() => setShowDropdown2(!showDropdown2)}
            className="dropdown-button"
            style={{
              alignItems: "center",
              width: "auto",
              height: "2.125rem",
              background: "#E9E9E9",
              border: "0.125rem solid #8C8C8C",
              padding: "0 0.625rem",
            }}
          >
            Project Manager
            <DropdownButtonIcon
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.19038 4.6037C2.99709 4.80251 2.99709 5.12485 3.19038 5.32366L7.14997 9.39639C7.24279 9.49186 7.36869 9.5455 7.49996 9.5455C7.63122 9.5455 7.75712 9.49186 7.84994 9.39639L11.8095 5.32366C12.0028 5.12485 12.0028 4.80251 11.8095 4.6037C11.6162 4.40489 11.3029 4.40489 11.1096 4.6037L7.49996 8.31644L3.89034 4.60370C3.69705 4.40489 3.38367 4.40489 3.19038 4.6037Z"
                fill="#060606"
              />
            </DropdownButtonIcon>
            {showDropdown2 && (
              <DropdownList className="dropdown-button">
                <DropdownListItem>Manager 1</DropdownListItem>
                <DropdownListItem>Manager 2</DropdownListItem>
                <DropdownListItem>Manager 3</DropdownListItem>
              </DropdownList>
            )}
          </DropdownButton>

          <DropdownButton
            onClick={() => setShowDropdown3(!showDropdown3)}
            className="dropdown-button"
            style={{
              background: "#E9E9E9",
              border: "0.125rem solid #8C8C8C",
            }}
          >
            Status
            <DropdownButtonIcon
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.19038 4.6037C2.99709 4.80251 2.99709 5.12485 3.19038 5.32366L7.14997 9.39639C7.24279 9.49186 7.36869 9.5455 7.49996 9.5455C7.63122 9.5455 7.75712 9.49186 7.84994 9.39639L11.8095 5.32366C12.0028 5.12485 12.0028 4.80251 11.8095 4.6037C11.6162 4.40489 11.3029 4.40489 11.1096 4.6037L7.49996 8.31644L3.89034 4.60370C3.69705 4.40489 3.38367 4.40489 3.19038 4.6037Z"
                fill="#060606"
              />
            </DropdownButtonIcon>
            {showDropdown3 && (
              <DropdownList className="dropdown-button">
                <DropdownListItem>Active</DropdownListItem>
                <DropdownListItem>Inactive</DropdownListItem>
                <DropdownListItem>Interactive</DropdownListItem>
              </DropdownList>
            )}
          </DropdownButton>
        </TableContainer>
      </Header>

      <TableContainer>
        <table {...getTableProps()} style={{ width: "100%" }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <Divider>
            <DividerSVG
              xmlns="http://www.w3.org/2000/svg"
              width="654"
              height="2"
              viewBox="0 0 654 2"
              fill="none"
            >
              <path d="M0 1H654" stroke="black" strokeOpacity="0.1" />
            </DividerSVG>
          </Divider>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>
    </PopupContainer>
  );
};

const PopupContainer = styled.div`
  width: 43.375rem;
  height: 20.187rem;
  tr {
    margin-bottom: 1.25rem;
  }
  display: flex;
  flex-direction: column;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  border-radius: 0.875rem;
`;

const TableContainer = styled.div`
  margin-top: 1.25rem;
  display: flex;
`;

const ImageContainer = styled.div`
  display: flex;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  > img {
    margin-left: -0.375rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Divider = styled.div`
  width: 40.875rem;
  position: absolute;
  top: 5.937rem;
`;

const DividerSVG = styled.svg`
  width: 100%;
  height: 0.125rem;
`;

const DropdownButton = styled.button`
  width: 7rem;
  height: 2.125rem;
  border: 1px solid;
  margin-right: 0.5rem;
`;

const DropdownListItem = styled.div`
  padding: 0.625rem;
  cursor: pointer;
  color: #333;
  font-size: 1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;
const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  z-index: 1;
  min-width: 10rem;
`;

export default Popup;
