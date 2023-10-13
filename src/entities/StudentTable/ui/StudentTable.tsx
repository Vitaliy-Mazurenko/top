import { useMediaQuery } from "usehooks-ts";
import { SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import StudentTableRow, { StudentTableRowProps } from "./StudentTableRow";
import {
  StyledTable,
  StyledTabledBody,
  StyledTabledHead,
  StyledTabledHeadCell,
  TableSwiper,
} from "./StudentTable.styled";

import "swiper/css";
import "swiper/css/pagination";

interface StudentsTableProps {
  students: StudentTableRowProps[];
}

export const StudentsTable = ({ students }: StudentsTableProps) => {
  const isPCScreenSize = useMediaQuery("(min-width: 1080px)");

  if (isPCScreenSize) {
    return (
      <StyledTable>
        <StyledTabledHead>
          <tr>
            <StyledTabledHeadCell>Студенти</StyledTabledHeadCell>
            <StyledTabledHeadCell>Вік</StyledTabledHeadCell>
            <StyledTabledHeadCell>Прогрес</StyledTabledHeadCell>
            <StyledTabledHeadCell>Домашні завдання</StyledTabledHeadCell>
            <StyledTabledHeadCell>Оцінки</StyledTabledHeadCell>
            <StyledTabledHeadCell>Кількість входів</StyledTabledHeadCell>
            <StyledTabledHeadCell>Країна</StyledTabledHeadCell>
          </tr>
        </StyledTabledHead>
        <StyledTabledBody>
          {students.map((student) => (
            <StudentTableRow key={student.studentId} {...student} />
          ))}
        </StyledTabledBody>
      </StyledTable>
    );
  } else {
    const swiperStudentsData = students.reduce((acc, curr, i) => {
      const innerIndex = Math.floor(i / 3);

      if (!acc[innerIndex]) {
        acc[innerIndex] = [];
      }

      acc[innerIndex].push(curr);

      return acc;
    }, [] as StudentTableRowProps[][]);

    return (
      <TableSwiper
        modules={[Pagination, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {swiperStudentsData.map((students, i) => (
          <SwiperSlide key={i}>
            <StyledTable>
              <StyledTabledHead>
                <tr>
                  <StyledTabledHeadCell>Студенти</StyledTabledHeadCell>
                  <StyledTabledHeadCell>Вік</StyledTabledHeadCell>
                  <StyledTabledHeadCell>Прогрес</StyledTabledHeadCell>
                  <StyledTabledHeadCell>
                    {isPCScreenSize ? "Домашні завдання" : "дз"}
                  </StyledTabledHeadCell>
                  <StyledTabledHeadCell>Оцінки</StyledTabledHeadCell>
                  <StyledTabledHeadCell>
                    {isPCScreenSize ? "Кількість входів" : "Входи"}
                  </StyledTabledHeadCell>
                  <StyledTabledHeadCell>Країна</StyledTabledHeadCell>
                </tr>
              </StyledTabledHead>
              <StyledTabledBody>
                {students.map((student) => (
                  <StudentTableRow key={student.studentId} {...student} />
                ))}
              </StyledTabledBody>
            </StyledTable>
          </SwiperSlide>
        ))}
      </TableSwiper>
    );
  }
};
