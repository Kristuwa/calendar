import { Container } from "../../App.styled";
import {
  Button,
  CalendarName,
  HeaderBottom,
  HeaderMainContent,
  HeaderTop,
  MonthName,
} from "./Header.styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { DaysOfWeek } from "../DaysOfWeek/DaysOfWeek";
import { DaysOfMonth } from "../DaysOfMonth/DaysOfMonth";

export const Header = () => {
  return (
    <header>
      <Container>
        <HeaderTop>
          <CalendarName>Interviewer Calendar</CalendarName>
          <Button type="button" aria-label="add">
            <AiOutlinePlus size={25} />
          </Button>
        </HeaderTop>
      </Container>
      <HeaderMainContent>
        <Container>
          <DaysOfWeek />
          <DaysOfMonth />
          <HeaderBottom>
            <Button type="button" aria-label="arrow left">
              <IoIosArrowBack size={25} />
            </Button>
            <MonthName>March 2019</MonthName>
            <Button type="button" aria-label="arrow right">
              <IoIosArrowForward size={30} />
            </Button>
          </HeaderBottom>
        </Container>
      </HeaderMainContent>
    </header>
  );
};
