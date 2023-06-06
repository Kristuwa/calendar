import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./utils/theme";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Button,
  CalendarName,
  Container,
  DayText,
  DaysList,
  Footer,
  FooterText,
  HeaderBottom,
  HeaderMainContent,
  HeaderTop,
  MonthName,
  NumberDay,
  TableBody,
  TableContainer,
  Td,
  TimeItem,
  TimeListSection,
} from "./App.styled";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <Container main="main">
          <TimeListSection>{timeList()}</TimeListSection>

          <TableContainer>
            <TableBody>{renderRows()}</TableBody>
          </TableContainer>
        </Container>
      </main>
      <Footer>
        <Container>
          <FooterText>Today</FooterText>
        </Container>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
