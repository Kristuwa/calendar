import { Button, CalendarName, HeaderTop } from "./TopOfHeader.styled";
import { AiOutlinePlus } from "react-icons/ai";

export const TopOfHeader = () => {
  return (
    <HeaderTop>
      <CalendarName>Interviewer Calendar</CalendarName>
      <Button type="button" aria-label="add">
        <AiOutlinePlus size={25} />
      </Button>
    </HeaderTop>
  );
};
