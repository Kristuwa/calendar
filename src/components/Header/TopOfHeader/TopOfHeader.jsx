import { Button, CalendarName, HeaderTop } from "./TopOfHeader.styled";
import { AiOutlinePlus } from "react-icons/ai";

export const TopOfHeader = ({ addEvent }) => {
  return (
    <HeaderTop>
      <CalendarName>Interviewer Calendar</CalendarName>
      <Button type="button" aria-label="add" onClick={addEvent}>
        <AiOutlinePlus size={25} />
      </Button>
    </HeaderTop>
  );
};
