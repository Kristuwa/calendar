import { useLocation } from "react-router-dom";
import { daysNumber } from "../../data";
import { DaysList } from "../DaysOfWeek/DaysOfWeek.styled";
import { NumberDay } from "./DaysOfMonth.styled";

export const DaysOfMonth = ({ day }) => {
  const location = useLocation();
  return (
    <DaysList>
      {daysNumber.map((item) => (
        <li key={item}>
          {day === item ? (
            <NumberDay
              active="active"
              to={`${item}`}
              state={{ from: location }}
            >
              {item}
            </NumberDay>
          ) : (
            <NumberDay to={`${item}`} state={{ from: location }}>
              {item}
            </NumberDay>
          )}
        </li>
      ))}
    </DaysList>
  );
};
