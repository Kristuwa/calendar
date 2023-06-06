import { daysOfWeek } from "../../data";
import { DayText, DaysList } from "./DaysOfWeek.styled";

export const DaysOfWeek = () => {
  return (
    <DaysList>
      {daysOfWeek.map((item, index, arr) => (
        <li key={item + index}>
          <DayText>{item}</DayText>
        </li>
      ))}
    </DaysList>
  );
};
