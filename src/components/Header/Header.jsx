import { Container } from "../../App.styled";
import { HeaderMainContent } from "./Header.styled";
import { DaysOfWeek } from "../DaysOfWeek/DaysOfWeek";
import { DaysOfMonth } from "../DaysOfMonth/DaysOfMonth";
import { TopOfHeader } from "./TopOfHeader/TopOfHeader";
import { BottomOfHeader } from "./BottomOfHeader/BottomOfHeader";

export const Header = ({ day }) => {
  return (
    <header>
      <Container>
        <TopOfHeader />
      </Container>
      <HeaderMainContent>
        <Container>
          <DaysOfWeek />
          <DaysOfMonth day={day} />
          <BottomOfHeader />
        </Container>
      </HeaderMainContent>
    </header>
  );
};
