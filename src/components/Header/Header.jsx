import { Container } from "../../App.styled";
import { HeaderMainContent } from "./Header.styled";
import { DaysOfWeek } from "../DaysOfWeek/DaysOfWeek";
import { DaysOfMonth } from "../DaysOfMonth/DaysOfMonth";
import { TopOfHeader } from "./TopOfHeader/TopOfHeader";
import { BottomOfHeader } from "./BottomOfHeader/BottomOfHeader";

export const Header = ({ addEvent }) => {
  return (
    <header>
      <Container>
        <TopOfHeader addEvent={addEvent} />
      </Container>
      <HeaderMainContent>
        <Container>
          <DaysOfWeek />
          <DaysOfMonth />
          <BottomOfHeader />
        </Container>
      </HeaderMainContent>
    </header>
  );
};
