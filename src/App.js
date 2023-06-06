import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Button,
  CalendarName,
  Container,
  DaysList,
  HeaderBottom,
  HeaderTop,
  TableBody,
  TableContainer,
  TableSection,
  Td,
  TimeItem,
  TimeListSection,
} from "./App.styled";

const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
const daysNumber = [25, 26, 27, 28, 29, 30, 31];
const renderRows = () => {
  const rows = [];
  for (let i = 0; i < 24; i += 1) {
    rows.push(
      <tr key={i}>
        <Td id={`${i}1`}></Td>
        <Td id={`${i}2`}></Td>
        <Td id={`${i}3`}></Td>
        <Td id={`${i}4`}></Td>
        <Td id={`${i}5`}></Td>
        <Td id={`${i}6`}></Td>
        <Td id={`${i}7`}></Td>
        <Td id={`${i}8`}></Td>
        <Td id={`${i}9`}></Td>
        <Td id={`${i}10`}></Td>
        <Td id={`${i}11`}></Td>
      </tr>
    );
  }
  return rows;
};

const timeList = () => {
  const timeArr = [];
  for (let i = 0; i < 25; i += 1) {
    if (i < 10) {
      timeArr.push(
        <TimeItem key={`0${i}:00`}>
          <p>0{i}:00</p>
        </TimeItem>
      );
    } else
      timeArr.push(
        <TimeItem key={`${i}:00`}>
          <p>{i}:00</p>
        </TimeItem>
      );
  }
  return timeArr;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Container>
          <HeaderTop>
            <CalendarName>Interviewer Calendar</CalendarName>
            <Button type="button" aria-label="add">
              <AiOutlinePlus size={30} />
            </Button>
          </HeaderTop>
          <DaysList>
            {daysOfWeek.map((item, index, arr) => (
              <li key={item + index}>{item}</li>
            ))}
          </DaysList>
          <DaysList>
            {daysNumber.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </DaysList>
          <HeaderBottom>
            <Button type="button" aria-label="arrow left">
              <IoIosArrowBack size={30} />
            </Button>
            <p>March 2019</p>
            <Button type="button" aria-label="arrow right">
              <IoIosArrowForward size={30} />
            </Button>
          </HeaderBottom>
        </Container>
      </header>
      <main>
        <Container main="main">
          <TimeListSection>{timeList()}</TimeListSection>
          <TableSection>
            <TableContainer>
              <TableBody>{renderRows()}</TableBody>
            </TableContainer>
          </TableSection>
        </Container>
      </main>
      <footer>
        <Container>
          <p>Today</p>
        </Container>
      </footer>
    </ThemeProvider>
  );
}

export default App;
