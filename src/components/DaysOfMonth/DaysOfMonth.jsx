import { useLocation } from "react-router-dom";
import { daysNumber } from "../../helpers/data";
import { DaysList } from "../DaysOfWeek/DaysOfWeek.styled";
import { NumberDay } from "./DaysOfMonth.styled";

export const DaysOfMonth = () => {
  const location = useLocation();
  return (
    <DaysList>
      {daysNumber.map((item) => (
        <li key={item}>
          <NumberDay to={`${item}`} state={{ from: location }}>
            {item}
          </NumberDay>
        </li>
      ))}
    </DaysList>
  );
};
