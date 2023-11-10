import React from "react";

import { checkDateIsEqual, checkIsToday } from "./utils/helpers/date";
import { useCalendar } from "./hooks/useCalendar";

import "./Calendar.css";

interface CalendarProps {
  locale?: string;
  selectedDate: Date;
  selectDate: (date: Date) => void;
  firstWeekDayNumber?: number;
  className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({
  locale = "default",
  selectedDate: date,
  selectDate,
  firstWeekDayNumber = 2,
  className,
}) => {
  const { functions, state } = useCalendar({
    locale,
    selectedDate: date,
    firstWeekDayNumber,
  });

  return (
    <div className={`calendar ${className}`}>
      <div className="calendar__header">
        {state.mode === "days" && (
          <div aria-hidden>
            {state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
          </div>
        )}
        <div className="calendar__header__arrow">
          <span
            aria-hidden
            className="calendar__header__arrow__left"
            onClick={() => functions.onClickArrow("left")}
          >
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 17L2 9L14 1"
                stroke="#C6E1EC"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span
            aria-hidden
            className="calendar__header__arrow__right"
            onClick={() => functions.onClickArrow("right")}
          >
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L13 9L1 17"
                stroke="#FF8C33"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="calendar__body">
        {state.mode === "days" && (
          <>
            <div className="calendar__week__names">
              {state.weekDaysNames.map((weekDaysName) => (
                <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
              ))}
            </div>
            <div className="calendar__days">
              {state.calendarDays.map((day) => {
                const isToday = checkIsToday(day.date);
                const isSelectedDay = checkDateIsEqual(
                  day.date,
                  state.selectedDay.date
                );
                const isAdditionalDay =
                  day.monthIndex !== state.selectedMonth.monthIndex;

                return (
                  <div
                    key={`${day.dayNumber}-${day.monthIndex}`}
                    aria-hidden
                    onClick={() => {
                      functions.setSelectedDay(day);
                      selectDate(day.date);
                    }}
                    className={[
                      "calendar__day",
                      isToday ? "calendar__today__item" : "",
                      isSelectedDay ? "calendar__selected__item" : "",
                      isAdditionalDay ? "calendar__additional__day" : "",
                    ].join(" ")}
                  >
                    {day.dayNumber}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
