import { daysNumber } from "../../data";
import { DaysList } from "../DaysOfWeek/DaysOfWeek.styled";
import { NumberDay } from "./DaysOfMonth.styled";

export const DaysOfMonth = () => {
  return (
    <DaysList>
      {daysNumber.map((item) => (
        <li key={item}>
          <NumberDay>{item}</NumberDay>
        </li>
      ))}
    </DaysList>
  );
};
